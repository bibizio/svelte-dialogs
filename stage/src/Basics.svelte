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
</script>

<h2>Basics</h2>
<button on:click={() => dialogs.alert()}>emtpy alert</button>
<button on:click={() => dialogs.alert("this is an alert")}>alert string</button>
<button on:click={() => dialogs.alert("<p>this is an alert</p>")}
  >alert html string</button
>
<button on:click={() => dialogs.confirm()}>emtpy confirm</button>
<button on:click={() => dialogs.confirm("are you sure?")}>confirm string</button
>
<button on:click={() => dialogs.confirm("<p>are you sure?</p>")}
  >confirm html string</button
>
<button on:click={() => dialogs.modal(htmlString)}>html string modal</button>
