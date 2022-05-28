<script>
  import { getOptions } from "../lib/ctx-manager";

  const { headerClass, titleClass, titleId, title, text, dividerClass, bodyClass, footerClass } =
    getOptions();
</script>

<header class={headerClass} data-testid="dialog-content__header">
  <slot name="header">
    <h2 id={titleId} class={titleClass} data-testid="dialog-content__title">
      {@html title}
    </h2>
    {#if title && ($$slots.body || text)}
      <hr class={dividerClass} data-testid="dialog-content__divider" />
    {/if}
  </slot>
</header>

{#if $$slots.body || text}
  <div class={bodyClass} data-testid="dialog-content__body">
    <slot name="body">{@html text}</slot>
  </div>
{/if}

<footer class={footerClass} data-testid="dialog-content__footer">
  <slot name="footer" />
</footer>
