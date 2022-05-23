<script>
  import Repl from "@sveltejs/svelte-repl";
  import { examples, mapFile } from "./examples";
  const svelteUrl = `https://unpkg.com/svelte@3.48.0`;
  let repl;
  let selectedIdx = 0;
  $: repl && repl.set({ components: examples[selectedIdx].files.map(mapFile) });
</script>

<main class="container">
  <nav class="sidebar">
    <h1 class="title">svelte-dialogs</h1>
    <ul class="toc">
      {#each examples as { name }, idx}
        <li
          class="toc-item"
          class:toc-item--active={idx === selectedIdx}
          on:click={() => (selectedIdx = idx)}
        >
          {name}
        </li>
      {/each}
    </ul>
  </nav>
  <Repl
    bind:this={repl}
    orientation="columns"
    {svelteUrl}
    fixed="false"
    relaxed
    workersUrl="workers"
  />
</main>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 300px auto;
  }

  .sidebar {
    max-height: 100vh;
  }

  .toc {
    overflow-y: auto;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 1rem 3rem 0;
  }

  .title {
    margin: 0;
    padding: 1rem;
    text-align: center;
    background-color: var(--secondary-color);
    color: var(--primary-color);
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

  .toc-item--active {
    color: var(--secondary-color);
    background-color: var(--accent-color);
  }
</style>
