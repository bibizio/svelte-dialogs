<script>
  import { dialogs } from "svelte-dialogs";

  const htmlString = ` 
  <div>
    <h1 id="my-title-id" class="my-title">all the html you want</h1>
    <div class="body">
      <p>now in text!</p>
    </div>
  </div>
  `;

  function printSubmit(submitArray) {
    if (submitArray) {
      const text = "<p>" + submitArray.join("</p><p>") + "</p>";
      dialogs.alert({ title: "Your responses", text });
    }
  }
</script>

<h2>Basics</h2>
<button on:click={() => dialogs.alert("this is an alert")}>alert string</button>
<button on:click={() => dialogs.alert("<p style='color: red;'>this is an alert</p>")}
  >alert html string</button
>
<button on:click={() => dialogs.confirm("are you sure?")}>confirm string</button
>
<button on:click={() => dialogs.confirm("<p style='color: blue;'>are you sure?</p>")}
  >confirm html string</button
>
<button on:click={() => dialogs.modal(htmlString)}>html string modal</button>

<button on:click={() => dialogs.prompt("an input").then(printSubmit)}
  >string prompt</button
>
<button
  on:click={() => dialogs.prompt(["input", "another input"]).then(printSubmit)}
  >string array prompt</button
>
