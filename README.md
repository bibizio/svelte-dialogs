# svelte-dialogs

handy dialogs in/for svelte

## Usage

### Basics

the easiest way to use _svelte-dialog_ is

```
<script>
  import { dialogs } from "svelte-dialogs";
</script>

<button on:click={() => dialogs.alert('this is an alert')}>click me</button>
```

`dialogs` has (as for now....) four methods for rendering a dialog:

- `alert()` shows a dialog with a dismiss button
- `confirm()` shows a dialog with a confirm and decline button
- `prompt()` shows a dialog with inputs, a cancel, submit and an optional reset button
- `modal()` shows a modal with..... well, everything you want in it (or nothing, if called empty)

`alert()`, `confirm()` and `modal()` can be called with an options parameter (see below) or with a string parameter (rendered as html).

`alert()` and `confirm()` will use that as a title, while `modal()` will use it as the whole content.

```
<script>
  import { dialogs } from "svelte-dialogs";

const htmlString =
  `
  <div>
    <h1 id="my-title-id" class="my-title">all the html you want</h1>
    <div class="body">
      <p>now in text!</p>
    </div>
  </div>
  `;
</script>

<button on:click={() => dialogs.modal(htmlString)}>click me</button>
```

`prompt()` accepts two parameters:

- a string or array of string parameter, used as labels for the inputs
- an options parameter (optional)

```
<script>
  import { dialogs } from "svelte-dialogs";
</script>

<button on:click={() => dialogs.prompt("an input")}>click me</button>
<button on:click={() => dialogs.prompt(["input", "another input"])}>click me</button>
```

### With options

You can use options with all the methods (reference below) like so:

```
<script>
  import { dialogs } from "svelte-dialogs";

  const opts = {
    title: "a title",
    text: "the text",
    titleClass: "my-title-class",
    closeButton: false,
    closeOnBg: true,
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

So for example:

```
// MyComponent.svelte
<script>
  import { DialogContent } from "svelte-dialogs";

  export let name = "";
</script>

<DialogContent>
  <h1 slot="header">MY COMPONENT</h1>
  <svelte:fragment slot="body">
    <p>hello {name}</p>
  </svelte:fragment>
</DialogContent>


// another component
<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";
</script>

<button on:click={() => dialogs.modal(MyComponent, { name: "world" })}>click me</button>
```

`prompt()` accepts as first parameter, an object, or objects array, in the shape of `{component: SvelteComponent, props: object}`

```
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

### Promise-based

All methods described return a promise that resolve on close:

- `alert()` resolve `undefined` on dismiss
- `confirm()` resolve `true` on confirm, `false` on decline and `undefined` on dismiss
- `prompt()` resolve `undefined` on dismiss, while on submit resolves with an array of the inputs values

so you can do something like this:

```
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

<button on:click={() => persistent()}>persistent dialog</button>

```

To resolve in custom components, _svelte-dialogs_ export a `getClose()` function to be called at initialization to retrieve the close function from the context

```
<script>
  import { getClose } from "svelte-dialogs";

  const close = getClose();
</script>

<button on:click={() => close('see you on the other side....')}>click me</button>
```

### In-component events-based

It's possible to define and use modals in-component using the `Dialog` component exported by _svelte-dialogs_ that accept an `options` props and emit:

- `show` on in-transition start
- `shown` on in-transition end
- `hide` on out-transition start
- `hidden` on out-transition end

The component also exports `open()`, `close()` and `data()` methods:

- `open()` can be called with a parameter that sets data to be retrieved with the `data()` method
- `close()` accept a parameter that will be emitted by `on:hide`

```
<script>
  import { Dialog } from "svelte-dialogs";

  let dialog;

  function handler(event) {
    // event.type 'hide' have event.detail === "my data"
    console.log(event.type, event.detail);
  }
</script>

<button on:click={() => dialog.open("my data")}>show</button>
<Dialog
  bind:this={dialog}
  on:show={handler}
  on:shown={handler}
  on:hide={handler}
  on:hidden={handler}
>
  <p>In-component events-based dialog</p>
  <p>{dialog.data()}</p>
  <button on:click={() => dialog.close(dialog.data())}>close</button>
</Dialog>
```

## Configure

You can configure the defaults with _svelte-dialogs_ export `config()`, for example in the entry point of you application or in you main component, like so:

```
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

config accept an object with the following properties: `global`, `alert`, `confirm` and `prompt` to fine-tuning the defaults at the beginning and then forget about it.

Every property is a config object as the one below.

It can obviously get confusing, but the order of importance for the options is:

`call options -> configured per-method options -> configured global options -> defaults`

.... have fun!

## Options

```
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
    bgIn?: { transition: transition; props: object };
    bgOut?: { transition: transition; props: object };
    in?: { transition: transition; props: object };
    out?: { transition: transition; props: object };
  };
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
  titleId: string;
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
  resetButton?: boolean;
  formClass?: string;
  formElementClass?: string;
  formLabelClass?: string;
  formInputClass?: string;
  submitButtonText?: string | htmlString;
  cancelButtonText?: string | htmlString;
  resetButtonText?: string | htmlString;
  submitButtonClass?: string;
  cancelButtonClass?: string;
  resetButtonClass?: string;
}

```

## Contributing

this prokect is still in dev, please don't open any issue yet
