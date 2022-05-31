<script>
  import { createEventDispatcher } from "svelte";
  import { focusTrap } from "../lib/focus-trap";
  import { setClose, setOptions } from "../lib/ctx-manager";
  import { applyTransition } from "../lib/utils";
  const dispatch = createEventDispatcher();

  /** close function */
  export let close;

  /** options */
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

  /** puts the close function in the context*/
  setClose(close);

  /** puts the options in the context*/
  setOptions(opts);

  /** apply background in transition */
  function bgInTransition(node, _) {
    return applyTransition(node, transitions.bgIn);
  }

  /** apply background out transition */
  function bgOutTransition(node, _) {
    return applyTransition(node, transitions.bgOut);
  }

  /** apply dialog in transition */
  function dialogInTransition(node, _) {
    return applyTransition(node, transitions.in);
  }

  /** apply dialog out transition */
  function dialogOutTransition(node, _) {
    return applyTransition(node, transitions.out);
  }

  /** call onShow callback and dispatch show event */
  function show() {
    onShow();
    dispatch("show");
  }

  /** call onShown callback and dispatch shown event */
  function shown() {
    onShown();
    dispatch("shown");
  }

  /** call onHide callback and dispatch hide event */
  function hide() {
    onHide();
    dispatch("hide");
  }

  /** call onHidden callback and dispatch hidden event */
  function hidden() {
    onHidden();
    dispatch("hidden");
  }

  /**
   * if closeOnEsc option is true, close the dialog on Escape keydown
   * @param event
   */
  function handleKeydown(event) {
    if (closeOnEsc && event.key === "Escape") {
      event.preventDefault();
      close();
    }
  }

  /**
   * if closeOnBg option is true, close the dialog on background click
   * @param event
   */
  function handleBgClick() {
    if (closeOnBg) {
      close();
    }
  }

  /**
   * stop the propagation of the events on the dialog
   * @param event
   */
  function handleDialogClick(event) {
    event.stopPropagation();
  }
</script>

<!-- 
  @component
  Core component for dialogs.
  Render the overlay and the dialog with given options, 
  sets option and close function in context.
 -->
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
