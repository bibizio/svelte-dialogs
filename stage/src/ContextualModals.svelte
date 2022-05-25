<script>
  import { dialogs } from "svelte-dialogs";
</script>

<h2>Contextual Modals</h2>
<button on:click={() => dialogs.error("An error occurred")}>error</button>
<button on:click={() => dialogs.success("Operation completed")}>success</button>
<button on:click={() => dialogs.warning("That's dangerous!")}>warning</button>
