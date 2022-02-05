import { SvelteComponent, SvelteComponentTyped } from "svelte/types/runtime";
import { TransitionConfig } from "svelte/types/runtime/transition";

interface DialogOptions {
  content?: string | SvelteComponent;
  props?: {};
  //
  closeButton?: boolean;
  closeOnBg?: boolean;
  closeOnEsc?: boolean;
  transitions?: {
    bgIn?: {
      transition: (
        node: Element,
        params: any
      ) => TransitionConfig | "fade" | "blur" | "fly" | "slide" | "scale" | "draw" | "crossfade";
      props?: TransitionConfig;
    };
    bgOut?: {
      transition: (
        node: Element,
        params: any
      ) => TransitionConfig | "fade" | "blur" | "fly" | "slide" | "scale" | "draw" | "crossfade";
      props?: TransitionConfig;
    };
    in?: {
      transition: (
        node: Element,
        params: any
      ) => TransitionConfig | "fade" | "blur" | "fly" | "slide" | "scale" | "draw" | "crossfade";
      props?: TransitionConfig;
    };
    out?: {
      transition: (
        node: Element,
        params: any
      ) => TransitionConfig | "fade" | "blur" | "fly" | "slide" | "scale" | "draw" | "crossfade";
      props?: TransitionConfig;
    };
  };
  overlayClass?: string;
  dialogClass?: string;
  closeButtonClass?: string;
  closeButtonText?: string;
  //
  headerClass?: string;
  titleClass?: string;
  titleId?: string;
  dividerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  title?: string;
  text?: string;
}

interface AlertOptions extends DialogOptions {
  dismissButtonText?: string;
  dismissButtonClass?: string;
}

interface ConfirmOptions extends DialogOptions {
  confirmButtonText?: string;
  declineButtonText?: string;
  confirmButtonClass?: string;
  declineButtonClass?: string;
}

interface PromptOptions extends DialogOptions {
  inputComponent?: SvelteComponent;
  inputProps?: {};
  resetButton?: boolean;
  formClass?: string;
  formElementClass?: string;
  inputLabelClass?: string;
  inputClass?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  resetButtonText?: string;
  submitButtonClass?: string;
  cancelButtonClass?: string;
  resetButtonClass?: string;
}

interface DialogsConfigOptions {
  global?: DialogOptions;
  alert?: AlertOptions;
  confirm?: ConfirmOptions;
  prompt?: PromptOptions;
}

interface DialogsInternalOptions
  extends DialogOptions,
    AlertOptions,
    ConfirmOptions,
    PromptOptions {}

export class DialogContent extends SvelteComponentTyped<
  {},
  {},
  { header: {}; body: {}; footer: {} }
> {}

export class Dialog extends SvelteComponentTyped<
  { options: DialogOptions },
  {
    show: CustomEvent<void>;
    shown: CustomEvent<void>;
    hide: CustomEvent<any>;
    hidden: CustomEvent<void>;
  },
  {
    default: {
      data: any;
      close: (data: any) => void;
    };
  }
> {
  open: (data: any) => void;
  close: (data: any) => void;
  data: () => any;
}

export function getClose(): () => void;
export function getOptions(): () => DialogsInternalOptions;

declare namespace dialogs {
  function config(options: DialogsConfigOptions): void;
  function modal(options: string | SvelteComponent | DialogOptions, props: {}): Promise<any>;
  function alert(options: string | AlertOptions): Promise<undefined>;
  function confirm(options: string | ConfirmOptions): Promise<undefined | boolean>;
  function prompt(
    input:
      | string
      | { component: SvelteComponent; props: {} }
      | {}
      | Array<string | { component: SvelteComponent; props: {} } | {}>,
    options: PromptOptions
  ): Promise<null | undefined | Array<any>>;
}
