import {
  getAlertOptions,
  getConfirmOptions,
  getModalOptions,
  getPromptOptions,
} from "./configuration";
import { createDialog, mapInput } from "./utils";

export const modal = (options, props) => {
  let opts;

  if (typeof options === "string" || typeof options === "function") {
    opts = getModalOptions();
    opts.content = options;
    if (props) {
      opts.props = props;
    }
  } else {
    opts = getModalOptions(options);
  }

  return createDialog(opts);
};

export const alert = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getAlertOptions();
    opts.title = options;
  } else {
    opts = getAlertOptions(options);
  }

  return createDialog(opts);
};

export const confirm = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getConfirmOptions();
    opts.title = options;
  } else {
    opts = getConfirmOptions(options);
  }

  return createDialog(opts);
};

export const prompt = (input, options) => {

  const inputs = (Array.isArray(input) ? input : [input]).map(mapInput);

  const opts = getPromptOptions(inputs, options);
  
  return createDialog(opts);
};
