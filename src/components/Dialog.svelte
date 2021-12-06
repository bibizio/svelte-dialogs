<script>
  import DialogCore from "./DialogCore.svelte";
  import { getModalOptions } from "../lib/configuration";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let options = {};
  let visible = false;
  let _data = null;

  $: opts = { ...getModalOptions(), ...options };

  export function open(data) {
    _data = data;
    visible = true;
  }

  export function close(data) {
    dispatch("hide", data);
    visible = false;
  }

  export function data() {
    return _data;
  }
</script>

{#if visible}
  <DialogCore {close} {opts} on:show on:shown on:hidden>
    <slot />
  </DialogCore>
{/if}
