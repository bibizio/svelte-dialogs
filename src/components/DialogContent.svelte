<script>
  import { getOptions } from "../lib/ctx-manager";

  /** retrieve options from context */
  const { headerClass, titleClass, titleId, title, text, dividerClass, bodyClass, footerClass } =
    getOptions();
</script>

<!-- 
  @component
  This component is the default content of a dialog and can be used in custom components fosvelte-dialogs.
  It defines three slots for header, body and footer.

  Usage:
  ```jsx
  ----- MyComponent.svelte
  <script>
    import { DialogContent, getClose } from "svelte-dialogs";
  
    const close = getClose();
    export let name = "";
  
    const message = "see you on the other side, Ray";
  </script>
  
  <DialogContent>
    <svelte:fragment slot="body">
      <p>Who you gonna call?</p>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <button class="name-btn" on:click={() => close(message)}>{name}</button>
    </svelte:fragment>
  </DialogContent>
  
  <style>
    .name-btn{
      background-color: red;
      color: white;
      border-radius: 200px;
      cursor: pointer;
    }
  </style>

  ----- SomeOtherComponent.svelte
  <script>
    import { dialogs } from "svelte-dialogs";
    import MyComponent from "path/to/MyComponent.svelte";
  
    const props = { name: "Ghostbusters!" }
  </script>
  
  <button on:click={() => dialogs.modal(MyComponent, props).then(dialogs.modal)}>Click me!</button>
  ```
  
 -->
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
