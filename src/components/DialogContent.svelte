<script>
  import { getOptions } from "../lib/ctx-manager";

  const opts = getOptions();
</script>

<header class={opts.headerClass} data-testid="dialog-content__header">
  <slot name="header">
    <h2
      id={opts.titleId}
      class={opts.titleClass}
      data-testid="dialog-content__title"
    >
      {@html opts.title}
    </h2>
  </slot>
</header>
{#if $$slots.body || opts.text}
  <div class={opts.bodyClass} data-testid="dialog-content__body">
    <slot name="body">{@html opts.text}</slot>
  </div>
{/if}
<footer class={opts.footerClass} data-testid="dialog-content__footer">
  <slot name="footer" />
</footer>
