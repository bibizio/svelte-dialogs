import { defaultDialogConfigOptionts } from "./defaults";

let customConfig = {};

export const config = (options) => {
  customConfig = options;
};

const getOpts = (defaults, custom, options = {}) => ({
  ...defaults,
  ...customConfig.global,
  ...custom,
  ...options,
});

export const getModalOptions = (options) =>
  getOpts(defaultDialogConfigOptionts.global, customConfig.global, options);

export const getAlertOptions = (options) =>
  getOpts(defaultDialogConfigOptionts.alert, customConfig.alert, options);

export const getConfirmOptions = (options) =>
  getOpts(defaultDialogConfigOptionts.confirm, customConfig.confirm, options);
