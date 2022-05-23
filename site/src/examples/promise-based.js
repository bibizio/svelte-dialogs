const content = `<script>
  import { dialogs } from "svelte-dialogs";
  
  async function persistent() {
    let confirm;
    let times = "";
    
    do {
      confirm = await dialogs.confirm("are you" + times + " sure?");
      times += " really";
    } while (confirm);
    
    dialogs.modal("very wise...");
  }
</script>

<button on:click={persistent}>Click me!</button>`;

export const promiseBased = {
  name: "Promise based",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content,
    },
  ],
};
