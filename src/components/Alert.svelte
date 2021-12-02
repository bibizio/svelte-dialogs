<script>
  import { getContext } from "svelte";
  import { default as DialogContent } from "./DialogContent.svelte";

  const close = getContext("close");
  const opts = getContext("opts");
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
