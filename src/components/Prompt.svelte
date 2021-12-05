<script>
  import { default as DialogContent } from "./DialogContent.svelte";
  import { getClose, getOptions } from "../lib/ctx-manager";
  import { writable, get } from "svelte/store";

  export let inputs = [];
  const close = getClose();
  const opts = getOptions();
  const form$ = writable(new Array(inputs.length));
  const ids = inputs.map(() => crypto.randomUUID());
</script>

<DialogContent>
  <form class={opts.formClass} slot="body">
    {#each inputs as input, idx}
      {#if typeof input === "string"}
        <div class={opts.formElementClass}>
          <label class={opts.formLabelClass} for={ids[idx]}>{input}</label>
          <input
            class={opts.formInputClass}
            id={ids[idx]}
            type="text"
            bind:value={$form$[idx]}
          />
        </div>
      {:else}
        <svelte:component this={input.component} {...input.props} bind:value={$form$[idx]}/>
      {/if}
    {/each}
  </form>
  <svelte:fragment slot="footer">
    <span>
      <button
        class={opts.cancelButtonClass}
        aria-label="Cancel"
        on:click={() => close()}>{@html opts.cancelButtonText}</button
      >
      {#if opts.resetButton}
        <button
          class={opts.resetButtonClass}
          aria-label="Reset form"
          on:click={() => form$.set(new Array(inputs.length))}
          >{@html opts.resetButtonText}</button
        >
      {/if}</span
    >
    <button
      class={opts.submitButtonClass}
      aria-label="Submit"
      on:click={() => close(get(form$))}>{@html opts.submitButtonText}</button
    >
  </svelte:fragment>
</DialogContent>
