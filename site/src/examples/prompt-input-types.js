const appContent = `<script>
  import { dialogs } from "svelte-dialogs";
  import MyInput from "./MyInput.svelte";

  const options = ["string 1", "string 2", "string 3"];

  const inputs = [
      "text",
      { label: "password", type: "password", required: true },
      { label: "email", type: "email" },
      { label: "checkbox", type: "checkbox" },
      { label: "date", type: "date" },
      { label: "textarea", type: "textarea" },
      { label: "number", type: "number" },
      { label: "color", type: "color" },
      { label: "file", type: "file" },
      { label: "range", type: "range" },
      { label: "select", type: "select", options },
      { label: "radio", type: "radio", options },
      { label: "select multiple", type: "select", options, multiple: true },
      {
          component: MyInput,
          props: {
              placeholder: "a placeholder",
              label: "custom component",
              name: "my-input",
              id: "my-input-id",
            },
        },
    ]

  const promptOptions = {
        title: "Different input types"
    }
</script>

<button on:click={() => dialogs.prompt(inputs, promptOptions).then(console.log)}>Click me!</button>`;

const myInputContent = `<script>
    export let value = undefined;
    export let placeholder;
    export let label;
    export let name;
    export let id;
</script>

<label for={id}>{label}</label>
<input bind:value {placeholder} {id} {name} type="text" />`;

export const promptInputTypes = {
  name: "Prompt input types",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: appContent,
    },
    {
      name: "MyInput.svelte",
      type: "svelte",
      content: myInputContent,
    },
  ],
};
