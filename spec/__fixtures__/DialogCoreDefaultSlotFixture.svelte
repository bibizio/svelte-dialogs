<script>
  import { defaultDialogOptions as opts } from "src/lib/defaults";
  import DialogCore from "src/components/DialogCore.svelte";
  import MockedComponent from "spec/__mocks__/MockedComponent.svelte";

  const close = () => {};
  const string = "test string";
</script>

<button data-testid="focus-trap-fixture__button" />
<DialogCore {close} {opts}>
  <MockedComponent {string} />
</DialogCore>
