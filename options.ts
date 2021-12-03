interface transition {}
interface SvelteComponent {}
interface htmlString {}

export interface DialogInternalOptions {
  // sets the content of the dialog,
  // overwriting the default component (that is DialogDontent)
  content?: string | htmlString | SvelteComponent;
  // props passed to the component
  props?: object;
  // these options always work, regardless of the component
  closeButton?: boolean;
  closeOnBg?: boolean;
  closeOnEsc?: boolean;
  transitions?: {
    bgIn?: { transition: transition; props: object };
    bgOut?: { transition: transition; props: object };
    in?: { transition: transition; props: object };
    out?: { transition: transition; props: object };
  };
  overlayClass?: string;
  dialogClass?: string;
  closeButtonClass?: string;
  closeButtonText?: string | htmlString;
  // specific to DialogContent, use these if your component
  // uses DialogContent or whith defaults
  title?: string | htmlString;
  text?: string | htmlString;
  headerClass?: string;
  titleClass?: string;
  bodyClass?: string;
  footerClass?: string;
  // specific to alert() with default component
  dismissButtonText?: string | htmlString;
  dismissButtonClass?: string;
  // specific to confirm() with default component
  confirmButtonText?: string | htmlString;
  declineButtonText?: string | htmlString;
  confirmButtonClass?: string;
  declineButtonClass?: string;
}
