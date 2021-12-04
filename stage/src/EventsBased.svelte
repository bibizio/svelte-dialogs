<script>
  import { Dialog } from "svelte-dialogs";

  let dialog;

  function handler(event) {
    // event.type 'hide' have event.detail === "my data"
    console.log(event.type, event.detail);
  }
</script>

<div>
  <h2>In-component events-based</h2>
  <button on:click={() => dialog.open("my data")}>show</button>
  <Dialog
    bind:this={dialog}
    on:show={handler}
    on:shown={handler}
    on:hide={handler}
    on:hidden={handler}
  >
    <p>template based dialog</p>
    <p>{dialog.data()}</p>
    <button on:click={() => dialog.close(dialog.data())}>close</button>
  </Dialog>
</div>
