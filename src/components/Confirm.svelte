<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  const close = getClose();
  const opts = getOptions();
</script>

<DialogContent>
  <svelte:fragment slot="footer">
    <button
      class={opts.declineButtonClass}
      aria-label="Decline"
      data-testid="confirm__decline-button"
      on:click={() => close(false)}>{@html opts.declineButtonText}</button
    >
    <button
      class={opts.confirmButtonClass}
      aria-label="Confirm"
      data-testid="confirm__confirm-button"
      on:click={() => close(true)}>{@html opts.confirmButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
