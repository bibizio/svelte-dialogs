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

  const noTransitions = {
    in: null,
    out: null,
    bgIn: null,
    bgOut: null,
  };

  const selectOptions = [
    { value: 1, description: "option 1" },
    { value: 2, description: "option 2" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
    { value: 3, description: "option 3" },
  ];

  const selectStrings = ["string 1", "string 2", "string 3"];
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
    dialogs
      .prompt(
        [
          { label: "password", type: "password", required: true },
          { label: "email", type: "email", value: "a@b.c" },
          { label: "checkbox", type: "checkbox" },
          { label: "date", type: "date" },
          { label: "textarea", type: "textarea" },
          { label: "number", type: "number", value: 10 },
          { label: "color", type: "color" },
          { label: "file", type: "file", multiple:true },
          { label: "range", type: "range" },
          { label: "select", type: "select", options: selectOptions, value: selectOptions[2] },
          { label: "select strings", type: "select", options: selectStrings, value: selectStrings[1] },
          { label: "radio", type: "radio", options: selectOptions, value: selectOptions[1] },
          { label: "radio strings", type: "radio", options: selectStrings },
          { label: "select", type: "select", options: selectOptions, multiple: true },
        ],
        {
          title: "prompt with types and options",
        }
      )
      .then(console.log)}>prompt with types and options</button
>

<button on:click={() => dialogs.modal({ ...opts, transitions: noTransitions })}
  >no transitions</button
>
