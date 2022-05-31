<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  /** retrieve close function from context */
  const close = getClose();

  /** retrieve options from context */
  const { declineButtonClass, declineButtonText, confirmButtonClass, confirmButtonText } =
    getOptions();
</script>

<!-- 
  @component
  Default content of confirm().
  Adds decline and confirm buttons in DialogContent footer slot
  that call close function with false and true.
 -->
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
