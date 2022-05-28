<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  const close = getClose();
  const { declineButtonClass, declineButtonText, confirmButtonClass, confirmButtonText } =
    getOptions();
</script>

<DialogContent>
  <svelte:fragment slot="footer">
    <button
      class={declineButtonClass}
      aria-label="Decline"
      data-testid="confirm__decline-button"
      on:click={() => close(false)}>{@html declineButtonText}</button
    >
    <button
      class={confirmButtonClass}
      aria-label="Confirm"
      data-testid="confirm__confirm-button"
      on:click={() => close(true)}>{@html confirmButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
