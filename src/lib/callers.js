import {
  getAlertOptions,
  getConfirmOptions,
  getModalOptions,
} from "./configuration";
import { createDialog } from "./utils";

export const modal = (options, props) => {
  let opts;

  if (typeof options === "string" || typeof options === "function") {
    opts = getModalOptions();
    opts.component = options;
  } else {
    opts = getModalOptions(options);
  }

  if (props) {
    opts.props = props;
  }
  
  return createDialog(opts);
};

export const alert = (options) => {
  let opts;

  if (!options) {
    opts = getAlertOptions();
  } else if (typeof options === "string") {
    opts = getAlertOptions();
    opts.content.text = options;
  } else {
    opts = getAlertOptions(options);
  }

  return createDialog(opts);
};
export const confirm = (options) => {
  let opts;
  if (!options) {
    opts = getConfirmOptions();
  } else if (typeof options === "string") {
    opts = getConfirmOptions();
    opts.content.text = options;
  } else {
    opts = getConfirmOptions(options);
  }

  return createDialog(opts);
};
