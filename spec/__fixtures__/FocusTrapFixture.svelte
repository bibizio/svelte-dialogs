<script>
  import { focusTrap } from "src/lib/focus-trap";
  export let targets = [];
</script>

<div>
  <button data-testid="focus-trap-fixture__button" />
  <div data-testid="focus-trap-fixture__container" use:focusTrap>
    {#each targets as target}
      {@html target}
    {/each}
  </div>
</div>
