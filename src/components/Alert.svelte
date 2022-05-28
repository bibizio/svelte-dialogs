<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  const close = getClose();
  const { dismissButtonClass, dismissButtonText } = getOptions();
</script>

<DialogContent>
  <svelte:fragment slot="footer">
    <button
      class={dismissButtonClass}
      aria-label="Dismiss alert"
      data-testid="alert__dismiss-button"
      on:click={() => close()}>{@html dismissButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
