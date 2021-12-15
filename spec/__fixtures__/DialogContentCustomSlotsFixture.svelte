<script>
  import DialogContent from "src/components/DialogContent.svelte";
</script>

<DialogContent>
  <p slot="header" data-testid="dialog-content-custom-slots-fixture__header">test header</p>
  <p slot="body" data-testid="dialog-content-custom-slots-fixture__body">test body</p>
  <p slot="footer" data-testid="dialog-content-custom-slots-fixture__footer">test footer</p>
</DialogContent>
