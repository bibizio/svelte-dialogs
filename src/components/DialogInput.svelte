<script>
  export let value = undefined;
  export let label = "";
  export let id = crypto.randomUUID();

  export let formElementClass = "dialog__form-element";
  export let inputLabelClass = "dialog__input-label";
  export let inputClass = "dialog__input";
</script>

<div class={formElementClass} data-testid="dialog-input__form-element">
  <label class={inputLabelClass} data-testid="dialog-input__label" for={id}
    >{label}{$$restProps.required ? " *" : ""}</label
  >
  {#if $$restProps.type === "textarea"}
    <textarea
      class={inputClass}
      data-testid="dialog-input__input"
      {id}
      bind:value
      {...$$restProps}
    />
  {:else}
    <input class={inputClass} data-testid="dialog-input__input" {id} bind:value {...$$restProps} />
  {/if}
</div>
