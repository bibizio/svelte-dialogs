<script>
  import { createEventDispatcher } from "svelte";
  import focusTrap from "../lib/focus-trap";
  import { setClose, setOptions } from "../lib/ctx-manager";

  export let close;
  export let opts;

  setClose(close);
  setOptions(opts);

  const dispatch = createEventDispatcher();

  function resolveTransition(node, point) {
    if (!point) return null;
    const { transition, props } = point;
    if (!transition) return null;
    return transition(node, props);
  }

  function bgIn(node, _) {
    return resolveTransition(node, opts.transitions.bgIn);
  }

  function bgOut(node, _) {
    return resolveTransition(node, opts.transitions.bgOut);
  }

  function dialogIn(node, _) {
    return resolveTransition(node, opts.transitions.in);
  }

  function dialogOut(node, _) {
    return resolveTransition(node, opts.transitions.out);
  }

  function show() {
    opts.onShow();
    dispatch("show");
  }

  function shown() {
    opts.onShown();
    dispatch("shown");
  }

  function hide() {
    opts.onHide();
    dispatch("hide");
  }

  function hidden() {
    opts.onHidden();
    dispatch("hidden");
  }

  function handleKeydown(event) {
    if (opts.closeOnEsc && event.key === "Escape") {
      event.preventDefault();
      close();
    }
  }

  function handleBgClick() {
    if (opts.closeOnBg) {
      close();
    }
  }

  function handleDialogClick(event) {
    event.stopPropagation();
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div
  class={opts.overlayClass}
  data-testid="dialog-core__overlay"
  tabindex="-1"
  in:bgIn
  out:bgOut
  on:click={handleBgClick}
>
  <div
    class={opts.dialogClass}
    role="dialog"
    aria-modal="true"
    aria-labelledby={opts.titleId}
    data-testid="dialog-core__dialog"
    in:dialogIn
    out:dialogOut
    on:introstart={show}
    on:introend={shown}
    on:outrostart={hide}
    on:outroend={hidden}
    on:click={handleDialogClick}
    use:focusTrap
  >
    {#if opts.closeButton}
      <button
        class={opts.closeButtonClass}
        aria-label="Close dialog"
        data-testid="dialog-core__close-button"
        on:click={() => close()}>{@html opts.closeButtonText}</button
      >
    {/if}

    {#if $$slots.default}
      <slot />
    {:else if typeof opts.content === "string"}
      {@html opts.content}
    {:else}
      <svelte:component this={opts.content} {...opts.props} />
    {/if}
  </div>
</div>
