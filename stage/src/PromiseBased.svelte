<script>
  import { dialogs } from "svelte-dialogs";

  async function persistent() {
    let confirm;
    let times = "";
    do {
      confirm = await dialogs.confirm("are you" + times + " sure?");
      times += " really";
    } while (confirm);

    dialogs.alert("well done......");
  }
</script>

<h2>Promise-based</h2>
<button on:click={() => persistent()}>persistent dialog</button>
