import { SvelteComponent } from "svelte";
import { check_outros, group_outros, transition_out } from "svelte/internal";
import * as svelteTransitions from "svelte/transition";

/**
 * Calls out transitions before destroying the component instance
 * Workaround for https://github.com/sveltejs/svelte/issues/4056
 * @param {SvelteComponent} instance - the svelte component instance
 */
export const outroAndDestroy = (instance) => {
  if (instance.$$.fragment && instance.$$.fragment.o) {
    group_outros();
    transition_out(instance.$$.fragment, 0, 0, () => {
      instance.$destroy();
    });
    check_outros();
  } else {
    instance.$destroy();
  }
};

/**
 * Utility function to resolve strings to svelte transitions functions.
 * It modifies the transition in the configuration object if is a string,
 * and that's ok: doing so it needs to resolve them only the first time
 * it's passed to this function
 * @param {object} transitions - the transitions object from configuration
 * @param {(string|function)} transitions.transition - the transitions object from configuration
 * @returns {object} - the transitions object from configuration
 * @throws {Error} - not an existing svelte transition
 */
export const resolveConfigTransitions = (transitions) => {
  for (const key in transitions) {
    const point = transitions[key];
    if (point && typeof point.transition === "string") {
      const transition = svelteTransitions[point.transition];
      if (!transition) throw new Error(`${point.transition} not an existing svelte transition`);
      point.transition = transition;
    }
  }
  return transitions;
};

/**
 * Utility function to apply a transition from the transitions congiguration object
 * to an html target
 * @param {Element} node - the document element target of the transition
 * @param {object} point - the transitions configuration object point of application
 * @param {function} point.transition - svelte transition function to apply
 * @param {object} point.props - props for the svelte transition function
 * @returns {TransitionConfig} - the configuration for the transition used by svelte
 */
export const applyTransition = (node, point) => {
  if (!point) return null;
  const { transition, props } = point;
  if (!transition) return null;
  return transition(node, props);
};

/**
 * Utility function to map the initial values of prompt input.
 * If not given, return defaults for different input types.
 * @param {object} input - the input object
 * @param {object} input.props - the input object props
 * @param {object} input.props.value - the input object given initial value
 * @param {object} input.props.type - the input object type
 * @returns {any} - the input initial value
 */
export const inputInitialValueMapping = ({ props }) => {
  const { type, value, multiple } = props;
  /** if there is an initial value, use that */
  if (value) return value;
  /** if not, use the type default */
  if (type === "checkbox") return false;
  if (type === "select" && multiple) return [];
  return undefined;
};

/**
 * Utility function to map the input argument of prompt().
 * @param {(string|function|object)} input - the input argument of prompt()
 * @returns {object} - the configuration object to be merged with other configuration.
 */
export const promptInputMapping = (input) => {
  if (typeof input === "string") {
    /** if input is string, use it as label */
    return { props: { label: input } };
  } else if (typeof input === "function") {
    /** if input is SvelteComponent, use it as content */
    return { component: input, props: {} };
  } else if (!input.props && !input.component) {
    /** if input is object without props and component, use it as component props */
    return { props: input };
  } else {
    /** if input is object use it as input option */
    return input;
  }
};

/**
 * Utility function to add props to inputs props from prompt()
 * @param {object[]} inputs - the inputs with base configuration
 * @param {object} opts - the options for the given component
 * @returns {object[]} - the inputs with enriched props
 */
export const getInputsWithProps = (inputs, opts) => {
  const { inputComponent, inputProps, formElementClass, inputLabelClass, inputClass } = opts;

  /** merge custom inputProps with default config options */
  const defaultProps = {
    label: "",
    formElementClass,
    inputLabelClass,
    inputClass,
    ...inputProps,
  };

  return inputs.map(({ component, props }) => {
    /**
     * If there is a custom component passed in caller,
     * use it without default or configured props
     */
    if (component && component !== inputComponent) return { component, props };

    /** else merge the passed props with the default ones */
    return {
      component: inputComponent,
      props: {
        ...defaultProps,
        ...props,
      },
    };
  });
};

/**
 * Utility function to get the description from an option in DialogInput
 * @param {(string|object)} option - the option
 * @returns {string} - the description
 */
export const optionDescription = (option) =>
  typeof option === "string" ? option : option.description ?? "";

/**
 * Utility function to check if an option is the selected
 * @param {(string|object)} selected - the selected option
 * @param {(string|object)} option - the option to check
 * @returns {boolean} - if the option is the selected one
 */
export const optionCompare = (selected, option) =>
  typeof option === "string" ? selected === option : selected.value === option.value;

/**
 * Utility function to check if an option is among the selected
 * @param {(string|object)} selected - the selected option
 * @param {(string|object)} option - the option to check
 * @returns {boolean} - if the option is the selected one
 */
export const optionCompareMultiple = (value, option) =>
  !!value.find((selected) => optionCompare(selected, option));

/**
 * Utility function to retrieve the compare function based on the multiple attribute
 * @param {boolean} multiple - the multiple attribute value
 * @returns {function} - the function to check an option against the DialogInput value
 */
export const getOptionCompare = (multiple) => (multiple ? optionCompareMultiple : optionCompare);

/**
 * Utility function to create random ids
 * @returns {string} - the id
 */
export const randomId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);
