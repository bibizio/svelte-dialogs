# svelte-dialogs

handy dialogs in/for svelte

## Usage

### Basics

the easiest way to use svelte dialog is

```
<script>
  import { dialogs } from "svelte-dialogs";
</script>

<button on:click={() => dialogs.alert('this is an alert')}>click me</button>
```

`dialogs` has (as for now....) three methods for rendering a dialog:

- `alert()` shows a dialog with a dismiss button
- `confirm()` shows a dialog with a confirm and decline button
- `modal()` shows a modal with..... well, everything you want in it (or nothing, if called empty)

All of them can be called with an options parameter (see below) or with a string parameter (rendered as html).

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

### With options

You can use options with all the methods (reference below) like so:

```
<script>
  import { dialogs } from "svelte-dialogs";

  const opts = {
    title: "a title",
    text: "the text",
    titleClass: "my-button-class",
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
```

### User component

`modal()` also can be called with a _SvelteComponent_ parameter and an optional _props_ parameter.

_svelte-dialogs_ also exports a _DialogContent_ component with three styled optional slots (_header_, _body_ and _footer_).

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

### Promis-based

All methods described return a promise that resolve on close:

- `alert()` resolve `undefined` on dismiss
- `confirm()` resolve `true` on confirm, `false` on decline and `undefined` on dismiss

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

To resolve in custom components, _svelte-dialogs_ export a `getClose` function to be called at initialization to retrieve the close function from the context

```
<script>
  import { getClose } from "svelte-dialogs";

  const close = getClose();
</script>

<button on:click={() => close('see you on the other side....')}>click me</button>
```

## Configure

You can configure the defaults with _svelte-dialogs_ export `config`, for example in the entry point of you application or in you main component, like so:

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

config accept an object with the following properties: `global`, `alert` and `confirm` to fine-tuning the defaults at the beginning and then forget about it.

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
}

```

## Contributing

this prokect is still a WIP, please don't open any issue yet
