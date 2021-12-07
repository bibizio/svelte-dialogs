<script>
  import { dialogs } from "svelte-dialogs";
  import MyComponent from "./MyComponent.svelte";
  import MyInput from "./MyInput.svelte";

  function printSubmit(submitArray) {
    if (submitArray) {
      const text = "<p>" + submitArray.join("</p><p>") + "</p>";
      dialogs.alert({ title: "Your responses", text });
    }
  }
</script>

<h2>User component</h2>
<button on:click={() => dialogs.modal(MyComponent, { name: "world" }).then(dialogs.alert)}
  >component modal</button
>

<button
  on:click={() =>
    dialogs
      .prompt({
        component: MyInput,
        props: {
          placeholder: "a placeholder",
          label: "my input",
          name: "my-input",
          id: "my-input-id",
        },
      })
      .then(printSubmit)}>component prompt</button
>

<button
  on:click={() =>
    dialogs
      .prompt([
        {
          component: MyInput,
          props: {
            placeholder: "a placeholder",
            label: "my input",
            name: "my-input",
            id: "my-input-id",
          },
        },
        {
          component: MyInput,
          props: {
            placeholder: "another placeholder",
            label: "my other input",
            name: "my-other-input",
            id: "my-other-input-id",
          },
        },
      ])
      .then(printSubmit)}>component array prompt</button
>
