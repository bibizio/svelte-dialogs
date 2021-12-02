<script>
  import { getContext } from "svelte";

  const opts = getContext("opts");
</script>

<header class={opts.headerClass}>
  <slot name="header">
    <h2 id="dialog__title" class={opts.titleClass}>
      {@html opts.content.title}
    </h2>
  </slot>
</header>
<div class={opts.bodyClass}>
  <slot name="body">{@html opts.content.text}</slot>
</div>
<footer class={opts.footerClass}><slot name="footer" /></footer>
