<script>
  import { DialogContent, getOptions, getClose } from "svelte-dialogs";

  console.log(getOptions());
  console.log(getClose());
  const close = getClose();

  export let name = "pippo";

  function click() {
    close();
    console.log(getOptions());
  }
</script>

<DialogContent>
  <div slot="footer"><button on:click={click}>ciao {name}</button></div>
</DialogContent>
