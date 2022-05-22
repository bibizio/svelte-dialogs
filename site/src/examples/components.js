export const components = {
  name: "Components",
  id: 4,
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: `
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
      
    `,
    },
    {
      name: "MyComponent.svelte",
      type: "svelte",
      content: `
      <script>
      import { DialogContent, getClose } from "svelte-dialogs";
    
      const close = getClose();
      export let name = "";
    </script>
    
    <DialogContent>
      <h1 slot="header">MY COMPONENT</h1>
      <svelte:fragment slot="body">
        <p>hello {name}</p>
      </svelte:fragment>
      <svelte:fragment slot="footer">
        <button on:click={() => close('!')}>close me</button>
      </svelte:fragment>
    </DialogContent>
    `,
    },
    {
      name: "MyInput.svelte",
      type: "svelte",
      content: `
      <script>
      export let value = '';
      export let placeholder;
      export let label;
      export let name;
      export let id;
    </script>
    
    <label for={id}>{label}</label>
    <input bind:value {placeholder} {id} {name} type="text" />
    
      
    `,
    },
  ],
};
