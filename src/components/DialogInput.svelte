<script>
  export let value = undefined;
  export let label = "";
  export let id = crypto.randomUUID();

  export let formElementClass = "";
  export let inputLabelClass = "";
  export let inputClass = "";

  const { type, required } = $$restProps;
</script>

<div class={formElementClass} data-testid="dialog-input__form-element">
  <label class={inputLabelClass} data-testid="dialog-input__label" for={id}
    >{label}{required ? " *" : ""}</label
  >
  {#if type === "textarea"}
    <textarea
      class={inputClass}
      data-testid="dialog-input__input"
      {id}
      bind:value
      {...$$restProps}
    />
  {:else if type === "checkbox"}
    <input
      type="checkbox"
      class={inputClass}
      data-testid="dialog-input__input"
      {id}
      bind:checked={value}
      {...$$restProps}
    />
  {:else if type === "file"}
    <input
      type="file"
      class={inputClass}
      data-testid="dialog-input__input"
      {id}
      bind:files={value}
      {...$$restProps}
    />
  {:else}
    <input class={inputClass} data-testid="dialog-input__input" {id} bind:value {...$$restProps} />
  {/if}
</div>
