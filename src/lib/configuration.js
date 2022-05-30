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

export const getModalOptions = (options) => getOpts("global", options);

export const getAlertOptions = (options) => getOpts("alert", options);

export const getConfirmOptions = (options) => getOpts("confirm", options);

export const getErrorOptions = (options) => getOpts("error", options);

export const getSuccessOptions = (options) => getOpts("success", options);

export const getWarningOptions = (options) => getOpts("warning", options);

export const getPromptOptions = (inputs, options) => {
  const opts = getOpts("prompt", options);
  const { props, inputComponent, inputProps, formElementClass, inputLabelClass, inputClass } = opts;

  const defaultProps = {
    label: "",
    formElementClass,
    inputLabelClass,
    inputClass,
    ...inputProps,
  };

  props.inputs = inputs.map(({ component, props }) => {
    if (component && component !== inputComponent) return { component, props };

    return {
      component: inputComponent,
      props: {
        ...defaultProps,
        ...props,
      },
    };
  });

  return opts;
};
