<script>
  export let value = "";
  export let label ="";
  export let id;
</script>

<label for={id} data-testid="mocked-input__label">{label}</label>
<input bind:value {id} data-testid="mocked-input__input" type="text" />
