import { fade, fly } from "svelte/transition";
import { DialogContent, Confirm, Alert } from "../components";

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
  bodyClass: "dialog__body",
  footerClass: "dialog__footer",
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
  bodyClass: "dialog__body",
  footerClass: "dialog__footer",
  title: "WARNING!",
  text: "",
  //
  dismissButtonText: "ok",
  dismissButtonClass: "dialog_button dialog_button--primary",
};

export const defaultConfirmOptionts = {
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
  bodyClass: "dialog__body",
  footerClass: "dialog__footer",
  title: "WARNING!",
  text: "are you sure you want to continue?",
  //
  confirmButtonText: "yes",
  declineButtonText: "no",
  confirmButtonClass: "dialog_button dialog_button--primary",
  declineButtonClass: "dialog_button dialog_button--decline",
};

export const defaultDialogConfigOptionts = {
  global: defaultDialogOptions,
  alert: defaultAlertOptions,
  confirm: defaultConfirmOptionts,
};
