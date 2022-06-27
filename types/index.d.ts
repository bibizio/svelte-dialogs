import { SvelteComponent, SvelteComponentTyped } from "svelte/types/runtime";
import { TransitionConfig } from "svelte/types/runtime/transition";

export type Close = (data: any) => void;

export interface ComponentAndProps {
  component: typeof SvelteComponent;
  props?: object;
}

export interface ModalOptions {
  content?: string | typeof SvelteComponent;
  props?: object;
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
  onHide?: () => void;
  onHidden?: () => void;
  onShow?: () => void;
  onShown?: () => void;
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

export interface AlertOptions extends ModalOptions {
  dismissButtonText?: string;
  dismissButtonClass?: string;
}

export interface ConfirmOptions extends ModalOptions {
  confirmButtonText?: string;
  declineButtonText?: string;
  confirmButtonClass?: string;
  declineButtonClass?: string;
}

export interface PromptOptions extends ModalOptions {
  inputComponent?: typeof SvelteComponent;
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

export interface DialogsOptions extends AlertOptions, ConfirmOptions, PromptOptions {}

export interface DialogsConfigOptions {
  global?: DialogsOptions;
  alert?: AlertOptions;
  confirm?: ConfirmOptions;
  prompt?: PromptOptions;
  error?: DialogsOptions;
  success?: DialogsOptions;
  warning?: DialogsOptions;
}

export class DialogContent extends SvelteComponentTyped<
  {},
  {},
  { header: {}; body: {}; footer: {} }
> {}

export class Dialog extends SvelteComponentTyped<
  { options: DialogsOptions },
  {
    show: CustomEvent<void>;
    shown: CustomEvent<void>;
    hide: CustomEvent<any>;
    hidden: CustomEvent<void>;
  },
  {
    default: {
      data: any;
      close: Close;
    };
  }
> {
  open: (data: any) => void;
  close: (data: any) => void;
  data: () => any;
}

export class Alert extends SvelteComponentTyped<{}, {}, {}> {}

export class Confirm extends SvelteComponentTyped<{}, {}, {}> {}

export class Prompt extends SvelteComponentTyped<{ inputs?: Array<ComponentAndProps> }, {}, {}> {}

export class DialogInput extends SvelteComponentTyped<
  {
    value?: any;
    label?: string;
    id?: string;
    formElementClass?: string;
    inputLabelClass?: string;
    inputClass?: string;
    options?: Array<string | object>;
  },
  {},
  {}
> {}

export function getClose(): Close;
export function getOptions(): DialogsOptions;

declare namespace dialogs {
  function config(options: DialogsConfigOptions): void;
  function modal(
    options?: string | typeof SvelteComponent | ModalOptions,
    props?: object
  ): Promise<any>;
  function alert(options?: string | AlertOptions): Promise<undefined>;
  function confirm(options?: string | ConfirmOptions): Promise<undefined | boolean>;
  function prompt(
    input?: string | ComponentAndProps | object | Array<string | ComponentAndProps | object>,
    options?: PromptOptions
  ): Promise<null | undefined | Array<any>>;
  function error(options?: string | DialogsOptions): Promise<any>;
  function success(options?: string | DialogsOptions): Promise<any>;
  function warning(options?: string | DialogsOptions): Promise<any>;
}
