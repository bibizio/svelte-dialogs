# svelte-dialogs

handy dialogs in/for svelte, see some [examples](https://bibizio.github.io/svelte-dialogs/)

## Install

You can install via _npm_

`npm i svelte-dialogs`

or use [jsdelivr CDN](https://www.jsdelivr.com/package/npm/svelte-dialogs) and add the script tag

```html
<script src="https://cdn.jsdelivr.net/npm/svelte-dialogs"></script>
```

If so, follow the [CDN script tag](#cdn-script-tag) usage.

## Usage

### Basics

the easiest way to use _svelte-dialog_ is

```svelte
<script>
  import { dialogs } from "svelte-dialogs";
</script>

<button on:click={() => dialogs.alert('this is an alert')}>click me</button>
```

`dialogs` methods for rendering a dialog are:

- `alert()` shows a dialog with a dismiss button
- `confirm()` shows a dialog with a confirm and decline button
- `prompt()` shows a dialog with inputs, a cancel, submit and an optional reset button
- `modal()` shows a modal with..... well, everything you want in it (or nothing, if called empty)
- `error()`, `success()` and `warning()` show accordingly styled alert. These are handy methods meant to be customized in configuration (or used as they are, if you like the default styles....)

all exepts for `prompt()` can be called with an options parameter ([see below](#options)) or with a string parameter (rendered as html):

- `alert()` and `confirm()` will use that as a title
- `error()`, `success()` and `warning()` will use that as text (title is meant to be the same for all of them)
- `modal()` will use it as the whole content.

```svelte
<script>
  import { dialogs } from "svelte-dialogs";

  /**
   * When using custom modal content, use the default title id (dialog-title-id)
   * or change the titleId options accordingly for accessibility reasons:
   * titleId is used in aria-labelledby attribute
   */
  const htmlString = `
    <div>
        <h1 id="dialog-title-id">all the html you want</h1>
        <div style="text-align: center">
            <p>now in text!</p>
        </div>
    </div>`;
</script>

<button on:click={() => dialogs.modal(htmlString)}>Click me!</button>
```

`prompt()` accepts two parameters:

- a string/SvelteComponent/object or array of string/SvelteComponent/object parameter
- an options parameter (optional)

Using strings in first parameter, will result in inputs with that string as labels. Using objects, you can specify component and props to use as input.
If you pass only props, the default input is used.

```svelte
<script>
  import { dialogs } from "svelte-dialogs";
</script>

<button on:click={() => dialogs.prompt("an input")}>click me</button>
<button on:click={() => dialogs.prompt(["an input", { label: "a required password input", type: "password", required: true }])}>click me</button>
```

### With options

You can use options with all the methods ([see below](#options)) like so:

```svelte
<script>
  import { dialogs } from "svelte-dialogs";

  const opts = {
    title: "a title",
    text: "the text",
    titleClass: "my-title-class",
    closeButton: false,
    closeOnBg: true,
    onShow: () => {
      doSomething();
      doSomethingElse();
    }
    transitions: {
      in: {
        transition: fade,
        props: {
          duration: 2000,
        },
      },
    },
  };
</script>

<button on:click={() => dialogs.modal(opts)}>click me</button>
<button on:click={() => dialogs.prompt("an input", opts)}>click me</button>
```

### User component

`modal()` also can be called with a _SvelteComponent_ parameter and an optional _props_ parameter.

_svelte-dialogs_ also exports a `DialogContent` component with three styled optional slots (_header_, _body_ and _footer_).

To retrieve the close function and options from the context, _svelte-dialogs_ exports `getClose()` and `getOptions()` functions to be called at initialization.

So for example:

```svelte
// MyComponent.svelte
<script>
  import { DialogContent, getClose, getOptions } from "svelte-dialogs";

  const close = getClose();
  const {titleId} = getOptions();
  export let name = "";
</script>

<DialogContent>
  <h1 id={titleId} slot="header">My component</h1>
  <svelte:fragment slot="body">
    <p>hello {name}</p>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <button on:click={() => close('!')}>close me</button>
  </svelte:fragment>
</DialogContent>


// another component
<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";
</script>

<button on:click={() => dialogs.modal(MyComponent, { name: "world" }).then(dialogs.alert)}>click me</button>
```

`prompt()` accepts as first parameter, an object, or objects array, in the shape of `{component: SvelteComponent, props: object}`.

```svelte
// MyInput.svelte
<script>
  export let value = '';
  export let placeholder;
  export let label;
  export let name;
  export let id;
</script>

<label for={id}>{label}</label>
<input bind:value {placeholder} {id} {name} type="text" />



// another component
<script>
  import { dialogs } from "svelte-dialogs";
  import MyInput from "./MyInput.svelte";

  const myInputProps = {
    placeholder: "a placeholder",
    label: "my input",
    name: "my-input",
    id: "my-input-id",
  };
</script>


<button
  on:click={() =>
    dialogs.prompt({
      component: MyInput,
      props: myInputProps,
    })}
>click me</button>

```

If no prop is required, you can just pass the component as in `prompt(MyInput)`

### Promise based

All methods described return a promise that resolve on close:

- `alert()` resolve `undefined` on dismiss
- `confirm()` resolves `true` on confirm, `false` on decline and `undefined` on dismiss
- `prompt()` resolves `undefined` on dismiss, while on submit resolves with an array of the inputs values

so you can do something like this:

```svelte
<script>
  import { dialogs } from "svelte-dialogs";

  async function persistent() {
    let confirm;
    let times = "";
    do {
      confirm = await dialogs.confirm(
        "are you" + times + " sure?"
      );
      times += " really";
    } while (confirm);

    dialogs.alert("well done......");
  }
</script>

<button on:click={persistent}>persistent dialog</button>

```

### Template/Events based

It's possible to define and use modals in-component using the `Dialog` component exported by _svelte-dialogs_ that accept an `options` props and emit:

- `show` on in-transition start
- `shown` on in-transition end
- `hide` on out-transition start
- `hidden` on out-transition end

The component exports `open()` that accepts data to be passed to the modal.

`close` function and `data` passed on `open()` are passed to slot as props. `close` accept a parameter that will be emitted by `on:hide`

The component also exports `close()` and `data()` methods to close and retrieve modal data outside the modal

```svelte
<script>
  import { Dialog } from "svelte-dialogs";

  let dialog;

  const titleId = "my-dialog-title";
  const options = {
    titleId,
    closeButton: false,
    closeOnBg: false,
    closeOnEsc: false,
  };

  function handler({ type, detail }) {
    // event.type 'hide' have event.detail === "my data"
    console.log(type, detail);
  }
</script>

<button on:click={() => dialog.open("my data")}>show</button>
<Dialog
  bind:this={dialog}
  on:show={handler}
  on:shown={handler}
  on:hide={handler}
  on:hidden={handler}
  let:data
  let:close
  {options}

>
  <h1 id={titleId}>In-component events-based dialog</h1>
  <p>{data}</p>
  <button on:click={() => close(data)}>close</button>
</Dialog>
```

### CDN script tag

If you install _svelte-dialogs_ via the script tag in a non-svelte project, the script adds the `SvelteDialogs` global object which includes the same functions of the `dialogs` export of the es module. You can use it like so:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My App Title</title>
    <script src="https://cdn.jsdelivr.net/npm/svelte-dialogs"></script>
  </head>

  <body>
    <button id="btn" onclick="SvelteDialogs.alert('This dialog is imported via script tag')">
      click me
    </button>
  </body>
</html>
```

## Configure

You can configure the defaults with _svelte-dialogs_ export `config()`, for example in the entry point of you application or in you main component, like so:

```javascript
// main.js
import App from "./App.svelte";
import { dialogs } from "svelte-dialogs";

dialogs.config({
  global: {
    overlayClass: "some-other-class",
    dialogClass: "some-other-class",
    closeButtonClass: "some-other-class",
    closeButtonText: "close me",
    headerClass: "some-other-class",
    titleClass: "some-other-class",
    bodyClass: "some-other-class",
    footerClass: "some-other-class",
  },
});

const app = new App({
  target: document.body,
  props: {},
});

export default app;
```

config accept an object with the following properties: `global`, `alert`, `confirm`, `error`, `success`, `warning`,and `prompt` to fine-tuning the defaults at the beginning and then forget about it.

Every property is a config object as the one below.

It can obviously get confusing, but the order of importance for the options is:

`call options -> configured per-method options -> configured global options -> defaults`

.... have fun!

## Options

```typescript
{
  // sets the content of the dialog,
  // overwriting the default component (that is DialogDontent)
  content?: string | htmlString | SvelteComponent;
  // props passed to the component
  props?: object;
  // these options always work, regardless of the component
  closeButton?: boolean;
  closeOnBg?: boolean;
  closeOnEsc?: boolean;
  transitions?: {
    bgIn?: { transition: transition | string; props: object };
    bgOut?: { transition: transition | string; props: object };
    in?: { transition: transition | string; props: object };
    out?: { transition: transition | string; props: object };
  };
  onHide: () => void;
  onHidden: () => void;
  onShow: () => void;
  onShown: () => void;
  overlayClass?: string;
  dialogClass?: string;
  closeButtonClass?: string;
  closeButtonText?: string | htmlString;
  // specific to DialogContent, use these if your component
  // uses DialogContent or whith defaults
  title?: string | htmlString;
  text?: string | htmlString;
  headerClass?: string;
  titleClass?: string;
  titleId?: string;
  dividerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  // specific to alert() with default component
  dismissButtonText?: string | htmlString;
  dismissButtonClass?: string;
  // specific to confirm() with default component
  confirmButtonText?: string | htmlString;
  declineButtonText?: string | htmlString;
  confirmButtonClass?: string;
  declineButtonClass?: string;
  // specific to prompt() with default component
  inputComponent?: SvelteComponent;
  inputProps?: object;
  resetButton?: boolean;
  formClass?: string;
  formElementClass?: string;
  inputLabelClass?: string;
  inputClass?: string;
  submitButtonText?: string | htmlString;
  cancelButtonText?: string | htmlString;
  resetButtonText?: string | htmlString;
  submitButtonClass?: string;
  cancelButtonClass?: string;
  resetButtonClass?: string;
}
```

### `transitions` option

The `transitions` object defines in/out transitions for the background overlay and the dialog with their props. You can use custom transitions functions or the ones in the [svelte/tansitions](https://svelte.dev/docs#run-time-svelte-transition) package. If you're using _svelte-dialogs_ in a non-svelte project, you can pass these transitions as string, for example:

```javascript
transitions: {
  in: {
    transition: 'slide',
    props: {
      duration: 2000,
    },
  },
}
```
