import { fade, fly } from "svelte/transition";
import { default as DialogContent } from "../components/DialogContent.svelte";
import { default as Alert } from "../components/Alert.svelte";
import { default as Confirm } from "../components/Confirm.svelte";
import { default as Prompt } from "../components/Prompt.svelte";

export const defaultDialogOptions = {
  content: DialogContent,
  props: {},
  //
  closeButton: true,
  closeOnBg: true,
  closeOnEsc: true,
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
  overlayClass: "dialog__overlay",
  dialogClass: "dialog__container",
  closeButtonClass: "dialog__close-button",
  closeButtonText: "",
  //
  headerClass: "dialog__header",
  titleClass: "dialog__title",
  titleId: "dialog-title-id",
  bodyClass: "dialog__body",
  footerClass: "dialog__footer dialog__footer--space-evenly",
  title: "",
  text: "",
};

export const defaultAlertOptions = {
  content: Alert,
  props: {},
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
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
  overlayClass: "dialog__overlay",
  dialogClass: "dialog__container",
  closeButtonClass: "dialog__close-button",
  closeButtonText: "",
  //
  headerClass: "dialog__header",
  titleClass: "dialog__title",
  titleId: "dialog-title-id",
  bodyClass: "dialog__body",
  footerClass: "dialog__footer dialog__footer--space-evenly",
  title: "",
  text: "",
  //
  dismissButtonText: "ok",
  dismissButtonClass: "dialog_button dialog_button--primary",
};

export const defaultConfirmOptions = {
  content: Confirm,
  props: {},
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
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
  overlayClass: "dialog__overlay",
  dialogClass: "dialog__container",
  closeButtonClass: "dialog__close-button",
  closeButtonText: "",
  //
  headerClass: "dialog__header",
  titleClass: "dialog__title",
  titleId: "dialog-title-id",
  bodyClass: "dialog__body",
  footerClass: "dialog__footer dialog__footer--space-evenly",
  title: "are you sure you want to continue?",
  text: "",
  //
  confirmButtonText: "yes",
  declineButtonText: "no",
  confirmButtonClass: "dialog_button dialog_button--primary",
  declineButtonClass: "dialog_button dialog_button--decline",
};

export const defaultPromptOptions = {
  content: Prompt,
  props: {},
  //
  closeButton: false,
  closeOnBg: false,
  closeOnEsc: false,
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
  overlayClass: "dialog__overlay",
  dialogClass: "dialog__container",
  closeButtonClass: "dialog__close-button",
  closeButtonText: "",
  //
  headerClass: "dialog__header",
  titleClass: "dialog__title",
  titleId: "dialog-title-id",
  bodyClass: "dialog__body",
  footerClass: "dialog__footer dialog__footer--space-between",
  title: "are you sure you want to continue?",
  text: "",
  //
  resetButton: true,
  formClass: "dialog__form",
  formElementClass: "dialog__form-element",
  formLabelClass: "dialog__form-label",
  formInputClass: "dialog__form-input",
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
