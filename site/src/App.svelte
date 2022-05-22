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
  <div class="sidebar">
    <h1 class="title">Svelte Dialogs</h1>
    <ul class="toc">
      {#each examples as { id, name }, i}
        <li class="toc-item" class:toc-item__active={i === idx} on:click={() => (idx = i)}>
          {i + 1}: {name}
        </li>
      {/each}
    </ul>
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
    width: 100%;
    display: grid;
    grid-template-columns: 300px auto;
  }

  .toc {
    overflow-y: auto;
    height: 100%;
    border-right: 1px solid grey;
    background-color: grey;
    color: #fff;
    padding: 3rem 3rem 0;
  }

  .title {
    margin: 0;
    padding: 1rem;
    text-align: center;
    background-color: white;
    color: grey;
  }

  .toc-item {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 3rem;
    margin: 0 -3rem;
    cursor: pointer;
  }

  .toc-item:hover {
    text-decoration: underline;
  }

  .toc-item__active {
    /* color: #f50; */
    color: grey;
    background-color: white;
  }
</style>
