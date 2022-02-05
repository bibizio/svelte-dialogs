import { noop } from "svelte/internal";
import { fade, fly } from "svelte/transition";
import { default as Alert } from "../components/Alert.svelte";
import { default as Confirm } from "../components/Confirm.svelte";
import { default as DialogContent } from "../components/DialogContent.svelte";
import { default as DialogInput } from "../components/DialogInput.svelte";
import { default as Prompt } from "../components/Prompt.svelte";

const commonDefaultOptions = {
  props: {},
  //
  transitions: {
    bgIn: {
      transition: fade,
      props: {},
    },
    bgOut: {
      transition: fade,
      props: {},
    },
    in: {
      transition: fly,
      props: {
        y: 200,
        duration: 500,
      },
    },
    out: {
      transition: fly,
      props: {
        y: 200,
        duration: 500,
      },
    },
  },
  //
  onShow: noop,
  onShown: noop,
  onHide: noop,
  onHidden: noop,
  //
  overlayClass: "dialog__overlay",
  dialogClass: "dialog__container",
  closeButtonClass: "dialog__close-button",
  closeButtonText: "",
  //
  headerClass: "dialog__header",
  titleClass: "dialog__title",
  titleId: "dialog-title-id",
  dividerClass: "dialog-content__divider",
  bodyClass: "dialog__body",
  footerClass: "dialog__footer dialog__footer--space-evenly",
  title: "",
  text: "",
};

export const defaultDialogOptions = {
  ...commonDefaultOptions,
  //
  content: DialogContent,
  //
  closeButton: true,
  closeOnBg: true,
  closeOnEsc: true,
};

export const defaultAlertOptions = {
  ...commonDefaultOptions,
  //
  content: Alert,
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
  //
  dismissButtonText: "ok",
  dismissButtonClass: "dialog_button dialog_button--primary",
};

export const defaultConfirmOptions = {
  ...commonDefaultOptions,
  //
  content: Confirm,
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
  title: "are you sure you want to continue?",
  //
  confirmButtonText: "yes",
  declineButtonText: "no",
  confirmButtonClass: "dialog_button dialog_button--primary",
  declineButtonClass: "dialog_button dialog_button--decline",
};

export const defaultPromptOptions = {
  ...commonDefaultOptions,
  //
  content: Prompt,
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
  footerClass: "dialog__footer dialog__footer--space-between",
  //
  inputComponent: DialogInput,
  inputProps: null,
  resetButton: true,
  formClass: "dialog__form",
  formElementClass: "dialog__form-element",
  inputLabelClass: "dialog__input-label",
  inputClass: "dialog__input",
  submitButtonText: "submit",
  cancelButtonText: "cancel",
  resetButtonText: "reset",
  submitButtonClass: "dialog_button dialog_button--primary",
  cancelButtonClass: "dialog_button dialog_button--decline",
  resetButtonClass: "dialog_button dialog_button--primary",
};

export const defaultDialogConfigOptions = {
  global: defaultDialogOptions,
  alert: defaultAlertOptions,
  confirm: defaultConfirmOptions,
  prompt: defaultPromptOptions,
};
