const content = `<script>
  import { Dialog } from "svelte-dialogs";

  let dialog;

  const titleId = "my-dialog-title";
  const options = {
    titleId,
    closeButton: false,
    closeOnBg: false,
    closeOnEsc: false,
  };

  function handler({ type, detail }) {
    console.log(type, detail);
  }
</script>

<button on:click={() => dialog.open("my data")}>Click me!</button>
<Dialog
  bind:this={dialog}
  on:show={handler}
  on:shown={handler}
  on:hide={handler}
  on:hidden={handler}
  let:data
  let:close
  {options}
>
  <h1 id={titleId} class="title">Here's your data</h1>
  <p class="data-paragraph">{data}</p>
  <button class="dismiss-btn" on:click={() => close(data)}>close</button>
</Dialog>

<style>
  .title {
    background-color: grey;
    padding: 0 20px;
    color: white;
    border-radius: 15px;
  }

  .data-paragraph {
    text-align: center;
  }

  .dismiss-btn {
    background-color: red;
    color: white;
    border-radius: 50px;
    cursor: pointer;
  }
</style>`;

export const templateEventsBased = {
  name: "Template/Events based",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content,
    },
  ],
};
