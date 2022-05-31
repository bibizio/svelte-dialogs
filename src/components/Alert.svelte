<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";

  /** retrieve close function from context */
  const close = getClose();

  /** retrieve options from context */
  const { dismissButtonClass, dismissButtonText } = getOptions();
</script>

<!-- 
  @component
  Default content of alert().
  Adds dismiss in DialogContent footer slot
  that call close function with undefined.
 -->
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
