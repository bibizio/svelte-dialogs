import { getOpts } from "./configuration";
import { createDialog } from "./create-dialog";
import { getInputsWithProps, promptInputMapping } from "./utils";

/**
 * Renders a modal
 * @param {(string|function|object)} options - the dialog options
 * @param {object} props - the props of a custom component content
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const modal = (options, props) => {
  let opts;

  if (typeof options === "string" || typeof options === "function") {
    /** if options is a string or a SvelteComponent, use it as content */
    opts = getOpts("global");
    opts.content = options;
    /** used by SvelteComponent, ignored by string content */
    if (props) {
      opts.props = props;
    }
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("global", options);
  }

  return createDialog(opts);
};

/**
 * Renders an alert
 * @param {(string|object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const alert = (options) => {
  let opts;

  if (typeof options === "string") {
    /** if options is a string, it's used as title option */
    opts = getOpts("alert");
    opts.title = options;
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("alert", options);
  }

  return createDialog(opts);
};

/**
 * Renders a confirm
 * @param {(string|object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const confirm = (options) => {
  let opts;

  if (typeof options === "string") {
    /** if options is a string, it's used as title option */
    opts = getOpts("confirm");
    opts.title = options;
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("confirm", options);
  }

  return createDialog(opts);
};

/**
 * Renders a prompt
 * @param {(string|object|function)} input - the inputs to be shown in the prompt
 * @param {(object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const prompt = (input, options) => {
  /** puts input in an array if is not an array already, then map the inputs array */
  const inputs = (Array.isArray(input) ? input : [input]).map(promptInputMapping);
  const opts = getOpts("prompt", options);

  /** set the inputs props of the option */
  opts.props.inputs = getInputsWithProps(inputs, opts);

  return createDialog(opts);
};

/**
 * Renders an error
 * @param {(string|object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const error = (options) => {
  let opts;

  if (typeof options === "string") {
    /** if options is a string, it's used as text option */
    opts = getOpts("error");
    opts.text = options;
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("error", options);
  }

  return createDialog(opts);
};

/**
 * Renders a success
 * @param {(string|object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const success = (options) => {
  let opts;

  if (typeof options === "string") {
    /** if options is a string, it's used as text option */
    opts = getOpts("success");
    opts.text = options;
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("success", options);
  }

  return createDialog(opts);
};

/**
 * Renders a warning
 * @param {(string|object)} options - the dialog options
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const warning = (options) => {
  let opts;

  if (typeof options === "string") {
    /** if options is a string, it's used as text option */
    opts = getOpts("warning");
    opts.text = options;
  } else {
    /** if options is an object, it's merged in configuration */
    opts = getOpts("warning", options);
  }

  return createDialog(opts);
};
