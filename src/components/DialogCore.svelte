<script>
  import { createEventDispatcher } from "svelte";
  import { focusTrap } from "../lib/focus-trap";
  import { setClose, setOptions } from "../lib/ctx-manager";
  import { applyTransition } from "../lib/utils";

  export let close;
  export let opts;

  let {
    transitions,
    onShow,
    onShown,
    onHide,
    onHidden,
    closeOnEsc,
    closeOnBg,
    overlayClass,
    dialogClass,
    titleId,
    closeButton,
    closeButtonClass,
    closeButtonText,
    content,
    props,
  } = opts;

  setClose(close);
  setOptions(opts);

  const dispatch = createEventDispatcher();

  function bgInTransition(node, _) {
    return applyTransition(node, transitions.bgIn);
  }

  function bgOutTransition(node, _) {
    return applyTransition(node, transitions.bgOut);
  }

  function dialogInTransition(node, _) {
    return applyTransition(node, transitions.in);
  }

  function dialogOutTransition(node, _) {
    return applyTransition(node, transitions.out);
  }

  function show() {
    onShow();
    dispatch("show");
  }

  function shown() {
    onShown();
    dispatch("shown");
  }

  function hide() {
    onHide();
    dispatch("hide");
  }

  function hidden() {
    onHidden();
    dispatch("hidden");
  }

  function handleKeydown(event) {
    if (closeOnEsc && event.key === "Escape") {
      event.preventDefault();
      close();
    }
  }

  function handleBgClick() {
    if (closeOnBg) {
      close();
    }
  }

  function handleDialogClick(event) {
    event.stopPropagation();
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div
  class={overlayClass}
  data-testid="dialog-core__overlay"
  tabindex="-1"
  in:bgInTransition
  out:bgOutTransition
  on:click={handleBgClick}
  use:focusTrap
>
  <div
    class={dialogClass}
    role="dialog"
    aria-modal="true"
    aria-labelledby={titleId}
    data-testid="dialog-core__dialog"
    in:dialogInTransition
    out:dialogOutTransition
    on:introstart={show}
    on:introend={shown}
    on:outrostart={hide}
    on:outroend={hidden}
    on:click={handleDialogClick}
  >
    {#if closeButton}
      <button
        class={closeButtonClass}
        aria-label="Close dialog"
        data-testid="dialog-core__close-button"
        on:click={() => close()}>{@html closeButtonText}</button
      >
    {/if}

    {#if $$slots.default}
      <slot />
    {:else if typeof content === "string"}
      {@html content}
    {:else}
      <svelte:component this={content} {...props} />
    {/if}
  </div>
</div>
