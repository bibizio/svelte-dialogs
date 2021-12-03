<script>
  import { dialogs } from "svelte-dialogs";
  import Example from "./Example.svelte";
  import CustomContent from "./CustomContent.svelte";
  import { fade } from "svelte/transition";

  async function persistent() {
    let confirm;
    let times = "";
    do {
      confirm = await dialogs.confirm("are you" + times + " sure?");
      times += " really";
    } while (confirm);

    dialogs.alert("well done......");
  }

  const htmlString = ` 
  <div>
    <h1 id="my-title-id" class="my-title">all the html you want</h1>
    <div class="body">
      <p>now in text!</p>
    </div>
  </div>
  `;

  const opts = {
    title: "a title",
    text: "the text",
    titleClass: "my-button-class",
    closeButton: true,
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

<Example />

<h1>Svelte dialogs</h1>

<button on:click={() => dialogs.modal(opts)}>click me</button>

<button on:click={() => dialogs.modal(CustomContent).then(console.log)}
  >modal component</button
>

<button
  on:click={() =>
    dialogs.modal(CustomContent, { name: "carlo" }).then(console.log)}
  >modal component with props</button
>

<button
  on:click={() =>
    dialogs
      .modal({ closeButton: false, title: "title", text: "text" })
      .then(console.log)}>modal options</button
>

<button on:click={() => dialogs.alert().then(console.log)}>alert empty</button>

<button on:click={() => dialogs.alert("ciao").then(console.log)}
  >alert string</button
>

<button
  on:click={() =>
    dialogs
      .alert({ closeButton: true, title: "title", text: "text" })
      .then(console.log)}>alert options</button
>

<button on:click={() => dialogs.confirm().then(console.log)}
  >confirm empty</button
>

<button on:click={() => dialogs.confirm("ciao").then(console.log)}
  >confirm string</button
>

<button
  on:click={() =>
    dialogs
      .confirm({ closeButton: true, title: "title", text: "text" })
      .then(console.log)}>confirm options</button
>

<button on:click={() => persistent()}>persistent dialog</button>
