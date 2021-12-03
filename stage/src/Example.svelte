<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";
</script>

<button on:click={() => dialogs.modal(MyComponent, { name: "world" })}>click me</button>
