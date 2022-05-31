import { defaultDialogConfigOptions } from "./defaults";
import { resolveConfigTransitions } from "./utils";

let customConfig = {};

export const config = (options) => {
  customConfig = options;
};

export const getOpts = (type, options = {}) => {
  const defaults = defaultDialogConfigOptions[type];
  const custom = customConfig[type] ?? {};
  const customGlobal = customConfig.global ?? {};

  const props = {
    ...defaults.props,
    ...customGlobal.props,
    ...custom.props,
    ...options.props,
  };

  const transitions = resolveConfigTransitions({
    ...defaults.transitions,
    ...customGlobal.transitions,
    ...custom.transitions,
    ...options.transitions,
  });

  return {
    ...defaults,
    ...customGlobal,
    ...custom,
    ...options,
    props,
    transitions,
  };
};
