const content = `<script>
  import { dialogs } from "svelte-dialogs";
  
  const options = {
    title: "a title",
    text: "the text",
    dialogClass: "blue-round-dialog",
    closeButton: false,
    closeOnBg: true,
    transitions: {
    in: {
      transition: 'fade',
      props: {
        duration: 2000,
      },
    },
    out: {
      transition: 'fade',
      props: {
        duration: 2000,
      },
    },
  },
};
</script>

<button on:click={() => dialogs.modal(options)}>Click me!</button>
      
<style>
  /**
	* classes used in options should be defined globally in global.css, 
	* here :global() is used only for the REPL to work
	*/
  :global(.blue-round-dialog) {
    z-index: 1010;
    position: fixed;
    background-color: blue;
    color: white;
    width: 100px;
    height: 100px;
    padding: 2rem;
    border-radius: 100px;
  }
</style>`;

export const options = {
  name: "Options",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content,
    },
  ],
};
