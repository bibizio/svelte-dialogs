<script>
    import { defaultDialogOptions as opts } from "src/lib/defaults";
    import DialogCore from "src/components/DialogCore.svelte";
    const close = () => {}
</script>

<button data-testid="focus-trap-fixture__button"></button>
<DialogCore {close} {opts}/>