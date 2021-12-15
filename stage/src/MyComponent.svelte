<script>
  import { DialogContent, getClose } from "svelte-dialogs";

  const close = getClose();
  export let name = "";
</script>

<DialogContent>
  <h1 slot="header">MY COMPONENT</h1>
  <svelte:fragment slot="body">
    <p>hello {name}</p>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <button on:click={() => close('!')}>close me</button>
  </svelte:fragment>
</DialogContent>
