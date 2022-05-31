<script>
  /** input value */
  export let value = undefined;

  /** input label */
  export let label = "";

  /** input id, used in label for attribute */
  export let id = crypto.randomUUID();

  /** form element class*/
  export let formElementClass = "";

  /** input label class */
  export let inputLabelClass = "";

  /** input class */
  export let inputClass = "";

  const { type, required } = $$restProps;
</script>

<!-- 
  @component
  Default inputs component for prompt dialog.
  Render and binds elements and values based on input type prop.
 -->
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
