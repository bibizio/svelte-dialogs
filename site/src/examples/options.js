export const options = {
  name: "Options",
  id: 3,
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: `
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
      <button on:click={() => dialogs.alert({ ...opts, dismissButtonText: "whatever...." })}>alert</button
      >
      <button
        on:click={() => dialogs.confirm({ ...opts, confirmButtonText: "aye", declineButtonText: "nay" })}
        >confirm</button
      >
      
      <button on:click={() => dialogs.prompt({ label: "password", type: "password" })}
        >prompt with one input and types</button
      >
      
      <button
        on:click={() =>
          dialogs.prompt(
            [
              { label: "password", type: "password", required: true },
              { label: "email", type: "email" },
              { label: "checkbox", type: "checkbox" },
              { label: "date", type: "date" },
              { label: "textarea", type: "textarea" },
              { label: "number", type: "number" },
              { label: "color", type: "color" },
              { label: "file", type: "file" },
              { label: "range", type: "range" },
            ],
            {
              title: "prompt with types and options",
            }
          ).then(console.log)}>prompt with types and options</button
      >
    `,
    },
  ],
};
