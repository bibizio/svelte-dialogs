import { defaultDialogConfigOptions } from "./defaults";

let customConfig = {};

export const config = (options) => {
  customConfig = options;
};

const getOpts = (defaults, custom, options = {}) => ({
  ...defaults,
  ...customConfig.global,
  ...custom,
  ...options,
  transitions: {
    ...defaults.transitions,
    ...customConfig.global?.transitions,
    ...custom?.transitions,
    ...options.transitions,
  }
});

export const getModalOptions = (options) =>
  getOpts(defaultDialogConfigOptions.global, customConfig.global, options);

export const getAlertOptions = (options) =>
  getOpts(defaultDialogConfigOptions.alert, customConfig.alert, options);

export const getConfirmOptions = (options) =>
  getOpts(defaultDialogConfigOptions.confirm, customConfig.confirm, options);

export const getPromptOptions = (options) =>
  getOpts(defaultDialogConfigOptions.prompt, customConfig.prompt, options);
