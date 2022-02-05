import { fade, blur, fly, slide, scale, draw, crossfade } from "svelte/transition";
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


export const resolveTransitions = (transitions) => {
  for (const key in transitions) {
    const { transition } = transitions[key];
    transitions[key].transition = resolveTransition(transition);
  }
  return transitions;
};

const resolveTransition = (transition) => {
  if (typeof transition !== "string") {
    return transition;
  }

  switch (transition) {
    case "fade":
      return fade;
    case "blur":
      return blur;
    case "fly":
      return fly;
    case "slide":
      return slide;
    case "scale":
      return scale;
    case "draw":
      return draw;
    case "crossfade":
      return crossfade;
    default:
      throw new Error(`${transition} not an existing svelte transition`);
  }
};
