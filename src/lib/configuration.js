import * as svelteTransitions from "svelte/transition";
import { defaultDialogConfigOptions } from "./defaults";

let customConfig = {};

export const config = (options) => {
  customConfig = options;
};

export const getOpts = (defaults, custom, options = {}) => ({
  ...defaults,
  ...customConfig.global,
  ...custom,
  ...options,
  props: {
    ...defaults.props,
    ...customConfig.global?.props,
    ...custom?.props,
    ...options.props,
  },
  transitions: resolveTransitions({
    ...defaults.transitions,
    ...customConfig.global?.transitions,
    ...custom?.transitions,
    ...options.transitions,
  }),
});

export const getModalOptions = (options) =>
  getOpts(defaultDialogConfigOptions.global, customConfig.global, options);

export const getAlertOptions = (options) =>
  getOpts(defaultDialogConfigOptions.alert, customConfig.alert, options);

export const getConfirmOptions = (options) =>
  getOpts(defaultDialogConfigOptions.confirm, customConfig.confirm, options);

export const getPromptOptions = (inputs, options) => {
  const opts = getOpts(defaultDialogConfigOptions.prompt, customConfig.prompt, options);

  const defaltInput = {
    component: opts.inputComponent,
    props: opts.inputProps || {
      label: "",
      formElementClass: opts.formElementClass,
      inputLabelClass: opts.inputLabelClass,
      inputClass: opts.inputClass,
    },
  };

  opts.props.inputs = inputs.map((input) => ({
    ...defaltInput,
    ...input,
  }));

  return opts;
};

/**
 * It modifies the transition in the configuration object if is a string,
 * and that's ok: if so it needs to resolves only the first time
 */
export const resolveTransitions = (transitions) => {
  for (const key in transitions) {
    const point = transitions[key];
    if (point && typeof point.transition === "string") {
      const transition = svelteTransitions[transition];
      if (!transition) throw new Error(`${point.transition} not an existing svelte transition`);
      point.transition = transition;
    }
  }
  return transitions;
};
