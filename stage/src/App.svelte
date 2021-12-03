<script>
  import { dialogs } from "svelte-dialogs";
  import ContentComponent from "./ContentComponent.svelte";
  import CustomContent from "./CustomContent.svelte";

  async function persistent() {
    let confirm;
    let count = [];
    do {
      confirm = await dialogs.confirm(
        "are you " + count.map((_) => "really").join(", ") + " sure?"
      );
      count.push(null);
    } while (confirm);

    dialogs.alert("well done......");
  }
</script>

<h1>Svelte dialogs</h1>

<button on:click={() => dialogs.modal("<p>modal string</p>").then(console.log)}
  >modal string</button
>

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
