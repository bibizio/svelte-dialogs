import { getOpts } from "./configuration";
import { createDialog } from "./create-dialog";
import { getInputsWithProps, promptInputMapping } from "./utils";

export const modal = (options, props) => {
  let opts;

  if (typeof options === "string" || typeof options === "function") {
    opts = getOpts("global");
    opts.content = options;
    if (props) {
      opts.props = props;
    }
  } else {
    opts = getOpts("global", options);
  }

  return createDialog(opts);
};

export const alert = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getOpts("alert");
    opts.title = options;
  } else {
    opts = getOpts("alert", options);
  }

  return createDialog(opts);
};

export const confirm = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getOpts("confirm");
    opts.title = options;
  } else {
    opts = getOpts("confirm", options);
  }

  return createDialog(opts);
};

export const prompt = (input, options) => {
  const inputs = (Array.isArray(input) ? input : [input]).map(promptInputMapping);
  const opts = getOpts("prompt", options);

  opts.props.inputs = getInputsWithProps(inputs, opts);

  return createDialog(opts);
};

export const error = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getOpts("error");
    opts.text = options;
  } else {
    opts = getOpts("error", options);
  }

  return createDialog(opts);
};

export const success = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getOpts("success");
    opts.text = options;
  } else {
    opts = getOpts("success", options);
  }

  return createDialog(opts);
};
export const warning = (options) => {
  let opts;

  if (typeof options === "string") {
    opts = getOpts("warning");
    opts.text = options;
  } else {
    opts = getOpts("warning", options);
  }

  return createDialog(opts);
};
