<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";
  import { writable, get } from "svelte/store";

  const mapInitialValue = ({ props }) => {
    const { type, value } = props;
    if (value) return value;
    if (type === "checkbox") return false;
    return undefined;
  };

  export let inputs = [];
  let touched = false;
  const close = getClose();
  const opts = getOptions();
  const form$ = writable(inputs.map(mapInitialValue));

  function handleSubmit() {
    close(get(form$));
  }

  function handleReset() {
    form$.set(inputs.map(mapInitialValue));
    touched = false;
  }
</script>

<form
  data-testid="prompt__form"
  class={opts.formClass}
  on:submit|preventDefault={handleSubmit}
  class:touched
>
  <DialogContent>
    <svelte:fragment slot="body">
      {#each inputs as input, idx}
        <svelte:component this={input.component} {...input.props} bind:value={$form$[idx]} />
      {/each}
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <span>
        <button
          type="button"
          class={opts.cancelButtonClass}
          aria-label="Cancel"
          data-testid={"prompt__cancel-button"}
          on:click={() => close(null)}>{@html opts.cancelButtonText}</button
        >
        {#if opts.resetButton}
          <button
            type="button"
            class={opts.resetButtonClass}
            aria-label="Reset form"
            data-testid={"prompt__reset-button"}
            on:click={handleReset}>{@html opts.resetButtonText}</button
          >
        {/if}</span
      >
      <button
        type="submit"
        class={opts.submitButtonClass}
        aria-label="Submit"
        data-testid={"prompt__submit-button"}
        on:click={() => {
          touched = true;
        }}>{@html opts.submitButtonText}</button
      >
    </svelte:fragment>
  </DialogContent>
</form>
