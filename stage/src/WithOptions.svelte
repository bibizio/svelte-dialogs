<script>
  import { dialogs } from "svelte-dialogs";
  import { fade } from "svelte/transition";

  const opts = {
    title: "a title",
    text: "the text",
    titleClass: "my-title-class",
    closeButton: false,
    closeOnBg: true,
    transitions: {
      in: {
        transition: fade,
        props: {
          duration: 2000,
        },
      },
    },
  };
</script>

<h2>With options</h2>

<button on:click={() => dialogs.modal(opts)}>modal</button>
<button on:click={() => dialogs.alert({ ...opts, dismissButtonText: "whatever...." })}
  >alert</button
>
<button
  on:click={() =>
    dialogs.confirm({ ...opts, confirmButtonText: "aye", declineButtonText: "nay" })}
  >confirm</button
>
