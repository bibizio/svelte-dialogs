const content = `<script>
  import { dialogs } from "svelte-dialogs";
    
  /**
   * When using custom modal content, use the default title id (dialog-title-id)
   * or change the titleId options accordingly for accessibility reasons: 
   * titleId is used in aria-labelledby attribute
   */
  const htmlString = \`
    <div>
        <h1 id="dialog-title-id">all the html you want</h1>
        <div style="text-align: center">
            <p>now in text!</p>
        </div>
    </div>\`;
</script>

<button on:click={() => dialogs.modal(htmlString)}>Click me!</button>`;

export const htmlString = {
  name: "HTML string",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content,
    },
  ],
};
