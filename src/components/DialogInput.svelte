<script>
  import { inputInitialValueMapping, optionDescription, getOptionCompare, randomId } from "../lib/utils";

  /** input value */
  export let value = inputInitialValueMapping({ props: $$props });

  /** input label */
  export let label = "";

  /** input id, used in label for attribute */
  export let id = randomId();

  /** form element class*/
  export let formElementClass = "";

  /** input label class */
  export let inputLabelClass = "";

  /** input class */
  export let inputClass = "";

  /** options for select */
  export let options = [];

  /**
   * workaround: type cannot be set dinamicaly
   */
  const { type, required, multiple } = $$restProps;

  /**
   * Compare function based on multiple attribute
   */
  const optionCompare = getOptionCompare(multiple);

  /**
   * Selected logic for select
   * @param {object} option - the option
   */
  function isSelected(option) {
    if (!value) return false;
    return optionCompare(value, option);
  }
</script>

<!-- 
  @component
  Default inputs component for prompt dialog.
  Render and binds elements and values based on input type prop.
 -->
<div class={formElementClass} data-testid="dialog-input__form-element">
  {#if type !== "radio"}
    <label class={inputLabelClass} data-testid="dialog-input__label" for={id}
      >{label}{required ? " *" : ""}</label
    >
  {/if}

  {#if type === "textarea"}
    <textarea
      {id}
      bind:value
      class={inputClass}
      data-testid="dialog-input__input"
      {...$$restProps}
    />
  {:else if type === "checkbox"}
    <input
      type="checkbox"
      {id}
      bind:checked={value}
      class={inputClass}
      data-testid="dialog-input__input"
      {...$$restProps}
    />
  {:else if type === "file"}
    <input
      type="file"
      {id}
      bind:files={value}
      class={inputClass}
      data-testid="dialog-input__input"
      {...$$restProps}
    />
  {:else if type === "select"}
    {#if multiple}
      <!-- workaround for https://github.com/sveltejs/svelte/issues/5644 -->
      <select
        {id}
        bind:value
        class={inputClass}
        data-testid="dialog-input__input"
        {required}
        multiple
      >
        {#each options as option}
          <option value={option} selected={isSelected(option)} data-testid="dialog-input__option">
            {optionDescription(option)}
          </option>
        {/each}
      </select>
    {:else}
      <select {id} bind:value class={inputClass} data-testid="dialog-input__input" {...$$restProps}>
        {#each options as option}
          <option value={option} selected={isSelected(option)} data-testid="dialog-input__option">
            {optionDescription(option)}
          </option>
        {/each}
      </select>
    {/if}
  {:else if type === "radio"}
    <fieldset data-testid="dialog-input__fieldset">
      <legend data-testid="dialog-input__legend">{label}{required ? " *" : ""}</legend>
      {#each options as option, idx}
        <label class={inputLabelClass} data-testid="dialog-input__label" for={id + idx}
          >{optionDescription(option)}</label
        >
        <input
          type="radio"
          id={id + idx}
          bind:group={value}
          value={option}
          class={inputClass}
          data-testid="dialog-input__input"
          {...$$restProps}
        />
      {/each}
    </fieldset>
  {:else}
    <input {id} bind:value class={inputClass} data-testid="dialog-input__input" {...$$restProps} />
  {/if}
</div>
