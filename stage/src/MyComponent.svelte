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
