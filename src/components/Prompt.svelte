<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";
  import { inputInitialValueMapping } from "../lib/utils";
  import { writable, get } from "svelte/store";

  /** inputs to render */
  export let inputs = [];

  /** flag touched class on submit to show errors in inputs */
  let touched = false;

  /** retrieve close function from context */
  const close = getClose();

  /** retrieve options from context */
  const {
    formClass,
    cancelButtonClass,
    cancelButtonText,
    resetButton,
    resetButtonClass,
    resetButtonText,
    submitButtonClass,
    submitButtonText,
  } = getOptions();

  /** maps inputs and create form observable */
  const form$ = writable(inputs.map(inputInitialValueMapping));

  /**
   * Calls close with form values
   */
  function handleSubmit() {
    close(get(form$));
  }

  /**
   * Reset the form values to the initial mapping and reset touched to false
   */
  function handleReset() {
    form$.set(inputs.map(inputInitialValueMapping));
    touched = false;
  }
</script>

<!-- 
  @component
  Default content of prompt().
  Wrap DialogContent in a form element, renders inputs in body slot and adds
  cancel, reset and submit buttons in footer slot.
  Call close with form values on submit, null on cancel.
 -->
<form
  data-testid="prompt__form"
  class={formClass}
  on:submit|preventDefault={handleSubmit}
  class:touched
>
  <DialogContent>
    <svelte:fragment slot="body">
      {#each inputs as { component, props }, idx}
        <svelte:component this={component} {...props} bind:value={$form$[idx]} />
      {/each}
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <div class="dialog__button-container">
        <button
          type="button"
          class={cancelButtonClass}
          aria-label="Cancel"
          data-testid={"prompt__cancel-button"}
          on:click={() => close(null)}>{@html cancelButtonText}</button
        >
        {#if resetButton}
          <button
            type="button"
            class={resetButtonClass}
            aria-label="Reset form"
            data-testid={"prompt__reset-button"}
            on:click={handleReset}>{@html resetButtonText}</button
          >
        {/if}
      </div>
      <div class="dialog__button-container">
        <button
          type="submit"
          class={submitButtonClass}
          aria-label="Submit"
          data-testid={"prompt__submit-button"}
          on:click={() => {
            touched = true;
          }}>{@html submitButtonText}</button
        >
      </div>
    </svelte:fragment>
  </DialogContent>
</form>
