<script>
  import DialogCore from "./DialogCore.svelte";
  import { getModalOptions } from "../lib/configuration";

  $: close = () => {};
  let visible = false;

  export let options = {};

  $: opts = { ...getModalOptions(), ...options };

  export function show() {
    console.log(this);
    const promise = new Promise((resolve, _) => {
      close = resolve;
    });
    visible = true;
    return promise.finally(() => {
      visible = false;
    });
  }

  console.log("@Dialog slots", $$slots);
</script>

{#if visible}
  <DialogCore {close} {opts} on:show on:shown on:hide on:hidden>
    <slot />
  </DialogCore>
{/if}
