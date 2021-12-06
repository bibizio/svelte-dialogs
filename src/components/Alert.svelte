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
      data-testid="alert__dismiss-button"
      on:click={() => close()}>{@html opts.dismissButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
