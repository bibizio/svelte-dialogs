<script>
  import { getContext } from "svelte";
  import { default as DialogContent } from "./DialogContent.svelte";

  const close = getContext("close");
  const opts = getContext("opts");
</script>

<DialogContent>
  <svelte:fragment slot="footer">
    <button
      class={opts.declineButtonClass}
      aria-label="Decline"
      on:click={() => close(false)}>{@html opts.declineButtonText}</button
    >
    <button
      class={opts.confirmButtonClass}
      aria-label="Confirm"
      on:click={() => close(true)}>{@html opts.confirmButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
