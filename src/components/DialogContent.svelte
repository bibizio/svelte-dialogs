<script>
  import { getOptions } from "../lib/ctx-manager";

  const opts = getOptions();
</script>

<header class={opts.headerClass}>
  <slot name="header">
    <h2 id={opts.titleId} class={opts.titleClass}>
      {@html opts.title}
    </h2>
  </slot>
</header>
{#if $$slots.body || opts.text}
<div class={opts.bodyClass}>
  <slot name="body">{@html opts.text}</slot>
</div>
{/if}
<footer class={opts.footerClass}><slot name="footer" /></footer>
