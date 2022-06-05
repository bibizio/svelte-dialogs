const appContent = `<script>
    import { dialogs } from "svelte-dialogs";

    /** 
     * configuration should be imported in root main.js
     * this import is here just for the REPL to work 
     */
    import './svelte-dialogs-config.js'
</script>

<button on:click={() => dialogs.error("An error occurred")}>error</button>
<button on:click={() => dialogs.success("Operation completed")}>success</button>
<button on:click={() => dialogs.warning("That's dangerous!").then(console.log)}>warning</button>`;

const configContent = `import { dialogs, Confirm } from "svelte-dialogs";

dialogs.config({
    warning: {
        content: Confirm,
        text: "Are you sure you want to continue?",
      },
});`;

export const contextualModals = {
  name: "Contextual modals",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: appContent,
    },
    {
      name: "svelte-dialogs-config.js",
      type: "js",
      content: configContent,
    },
  ],
};
