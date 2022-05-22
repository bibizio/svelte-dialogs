<script>
  import Repl from "@sveltejs/svelte-repl";
  import { examples } from "./examples";
  const svelteUrl = `https://unpkg.com/svelte@3.48.0`;
  let repl;
  const clone = (file) => ({
    name: file.name.replace(/.\w+$/, ""),
    type: file.type,
    source: file.content,
  });

  let idx = 0;
  $: repl && repl.set({ components: examples[idx].files.map(clone) });
</script>

<div class="container">
  <div class="toc">
    {#each examples as { id, name }, i}
      <li on:click={() => idx = i}>
        {i + 1}: {name}
      </li>
    {/each}
  </div>
  <Repl
    bind:this={repl}
    orientation="columns"
    {svelteUrl}
    fixed="false"
    relaxed
    workersUrl="/workers"
  />
</div>

<style>
  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 100px auto;
  }
</style>
