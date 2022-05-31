<script>
  import DialogCore from "./DialogCore.svelte";
  import { getOpts } from "../lib/configuration";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /** dialog additional options to be merged with the ones from configuration */
  export let options = {};

  /** flag for render logic */
  let visible = false;

  /** internal reference at data passed to open function */
  let _data = null;

  /** merged options */
  $: opts = getOpts("global", options);

  /**
   * Shows the dialog and set given data
   * @param {any} data - data to be passed to the dialog
   */
  export function open(data) {
    _data = data;
    visible = true;
  }

  /**
   * Hide the dialog and dispatch the hide event with given data
   * @param {any} data - data to dispatch on hide
   */
  export function close(data) {
    dispatch("hide", data);
    visible = false;
  }

  /**
   * expose the data passed in open to the slot
   */
  export function data() {
    return _data;
  }
</script>

<!-- 
  @component
  This component lets you define a template based dialog to get a reference from.
  Usage:
  ```jsx
    <script>
      import { Dialog } from "svelte-dialogs";
    
      let dialog;
    
      const titleId = "my-dialog-title";
      const options = {
        titleId,
        closeButton: false,
        closeOnBg: false,
        closeOnEsc: false,
      };
    
      function handler({ type, detail }) {
        console.log(type, detail);
      }
    </script>

    <button on:click={() => dialog.open("my data")}>Click me!</button>
    <Dialog
      bind:this={dialog}
      on:show={handler}
      on:shown={handler}
      on:hide={handler}
      on:hidden={handler}
      let:data
      let:close
      {options}
    >
      <h1 id={titleId}>Here's your data</h1>
      <p>{data}</p>
      <button class="dismiss-btn" on:click={() => close(data)}>close</button>
    </Dialog>

    <style>
      .dismiss-btn {
        background-color: red;
        color: white;
        border-radius: 50px;
        cursor: pointer;
      }
    </style>
  ```
  
 -->
{#if visible}
  <DialogCore {close} {opts} on:show on:shown on:hidden>
    <slot {close} data={_data} />
  </DialogCore>
{/if}
