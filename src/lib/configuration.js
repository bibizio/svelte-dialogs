import { defaultDialogConfigOptionts } from "./defaults";

let customConfig = {};

export const config = (options) => {
  customConfig = options;
};

const getOpts = (defaults) => (options = {}) => {
  const opts = {
    ...defaults,
    ...customConfig.global,
    ...customConfig.alert,
    ...options,
  };
  const { title, text } = opts;
  opts.content = { title, text };
  return opts;
};

export const getModalOptions = getOpts(defaultDialogConfigOptionts.global);

export const getAlertOptions = getOpts(defaultDialogConfigOptionts.alert);

export const getConfirmOptions = getOpts(defaultDialogConfigOptionts.confirm);
