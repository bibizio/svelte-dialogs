const appContent = `<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";

  const props = { name: "Ghostbusters!" }
</script>

<button on:click={() => dialogs.modal(MyComponent, props).then(dialogs.modal)}>Click me!</button>`;

const myComponentContent = `<script>
  import { DialogContent, getClose } from "svelte-dialogs";

  const close = getClose();
  export let name = "";

  const message = "see you on the other side, Ray";
</script>

<DialogContent>
  <svelte:fragment slot="body">
    <p>Who you gonna call?</p>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <button class="name-btn" on:click={() => close(message)}>{name}</button>
  </svelte:fragment>
</DialogContent>

<style>
	.name-btn{
		background-color: red;
		color: white;
		border-radius: 200px;
    cursor: pointer;
	}
</style>`;

export const customComponents = {
  name: "Custom Components",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: appContent,
    },
    {
      name: "MyComponent.svelte",
      type: "svelte",
      content: myComponentContent,
    },
  ],
};
