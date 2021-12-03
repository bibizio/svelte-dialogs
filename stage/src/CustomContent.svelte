<script>
  import DialogContent from "svelte-dialogs/src/components/DialogContent.svelte";

  import dialogs from "svelte-dialogs";

  console.log(dialogs.getOptions());
  console.log(dialogs.getClose());

  export let name = "pippo";

  function click() {
    console.log(document.querySelector(".dialog__container"));
    // console.log(dialogs.options)
    console.log(dialogs.getOptions());
  }
</script>

<DialogContent>
  <div slot="footer"><button on:click={click}>ciao {name}</button></div>
</DialogContent>
