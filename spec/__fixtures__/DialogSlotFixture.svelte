<script>
  import Dialog from "src/components/Dialog.svelte";
  let dialog;

  export function open(data) {
    dialog.open(data);
  }
</script>

<!-- <button data-testid="dialog-slot-fixture__open-button" on:click={() => dialog.open("test data")} /> -->
<Dialog bind:this={dialog} let:data let:close on:hide>
  <p data-testid="dialog-slot-fixture__data-paragraph">{data}</p>
  <button data-testid="dialog-slot-fixture__close-button" on:click={() => close(data)} />
</Dialog>
