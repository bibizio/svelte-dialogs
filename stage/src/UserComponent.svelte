<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";
</script>

<h2>User component</h2>
<button
  on:click={() =>
    dialogs.modal(MyComponent, { name: "world" }).then(dialogs.alert)}
  >click me</button
>
