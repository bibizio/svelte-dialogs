import { check_outros, group_outros, transition_out } from "svelte/internal";
import * as svelteTransitions from "svelte/transition";

// Workaround for https://github.com/sveltejs/svelte/issues/4056
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
 * It modifies the transition in the configuration object if is a string,
 * and that's ok: if so it needs to resolves only the first time
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

export const applyTransition = (node, point) => {
  if (!point) return null;
  const { transition, props } = point;
  if (!transition) return null;
  return transition(node, props);
};

export const promptInputMapping = (input) => {
  if (typeof input === "string") {
    return { props: { label: input } };
  } else if (typeof input === "function") {
    return { component: input, props: {} };
  } else if (!input.props && !input.component) {
    return { props: input };
  } else {
    return input;
  }
};

export const inputInitialValueMapping = ({ props }) => {
  const { type, value } = props;
  if (value) return value;
  if (type === "checkbox") return false;
  return undefined;
};
