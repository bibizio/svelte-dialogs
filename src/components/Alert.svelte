<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  const close = getClose();
  const opts = getOptions();
</script>

<DialogContent>
  <svelte:fragment slot="footer">
    <button
      class={opts.dismissButtonClass}
      aria-label="Dismiss alert"
      on:click={() => close()}>{@html opts.dismissButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
