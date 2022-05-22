export const helloWorld = {
  name: "Hello world",
  id: 1,
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: 
`<script>
  import { dialogs } from "svelte-dialogs";
</script>
      
<button on:click={() => dialogs.alert("an alert")}>Show Modal</button>
      `,
    }
  ],
};
