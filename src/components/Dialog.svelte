<script>
  import { createEventDispatcher } from "svelte";
  import focusTrap from "../lib/focus-trap";
  import { setClose, setOptions } from "../lib/ctx-manager";

  export let close;
  export let opts;

  console.log("@Modal opts", opts);

  setClose(close);
  setOptions(opts);

  const dispatch = createEventDispatcher();

  function bgIn(node, _) {
    const { transition, props } = opts.transitions.bgIn;
    return transition(node, props);
  }

  function bgOut(node, _) {
    const { transition, props } = opts.transitions.bgOut;
    return transition(node, props);
  }

  function modalIn(node, _) {
    const { transition, props } = opts.transitions.in;
    return transition(node, props);
  }

  function modalOut(node, _) {
    const { transition, props } = opts.transitions.out;
    return transition(node, props);
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
  tabindex="-1"
  in:bgIn
  out:bgOut
  on:click={handleBgClick}
>
  <div
    class={opts.dialogClass}
    role="dialog"
    aria-modal="true"
    aria-labelledby="dialog__title"
    in:modalIn
    out:modalOut
    on:introstart={() => dispatch("show")}
    on:introend={() => dispatch("shown")}
    on:outrostart={() => dispatch("hide")}
    on:outroend={() => dispatch("hidden")}
    on:click={handleDialogClick}
    use:focusTrap
  >
    {#if opts.closeButton}
      <button
        class={opts.closeButtonClass}
        aria-label="Close dialog"
        on:click={() => close()}
      />
    {/if}

    {#if typeof opts.component === "string"}
      {@html opts.component}
    {:else}
      <svelte:component this={opts.component} {...opts.props} />
    {/if}
  </div>
</div>
