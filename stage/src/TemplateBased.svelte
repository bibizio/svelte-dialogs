<script>
  import { Dialog } from "svelte-dialogs";

  let modal;

  function showModal() {
    modal.show().then(() => {
      console.log("@TemplateBased", "show then");
    });
  }

  function showHandler() {
    console.log("@TemplateBased", "showHandler");
  }
  function shownHandler() {
    console.log("@TemplateBased", "shownHandler");
  }
  function hideHandler() {
    console.log("@TemplateBased", "hideHandler");
  }
  function hiddenHandler() {
    console.log("@TemplateBased", "hiddenHandler");
  }
</script>

<div>
  <h1>TEMPLATE BASED</h1>
  <button on:click={showModal}>show</button>
  <Dialog
    on:show={showHandler}
    on:shown={shownHandler}
    on:hide={hideHandler}
    on:hidden={hiddenHandler}
    bind:this={modal}
  >
    <p>template based modal</p>
  </Dialog>
</div>
