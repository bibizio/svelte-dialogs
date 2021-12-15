import { check_outros, group_outros, transition_out } from "svelte/internal";
import { DialogCore } from "../components";

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

export const createDialog = (opts) => {
  let close;
  const promise = new Promise((resolve) => {
    close = resolve;
  });
  const dialog = new DialogCore({
    target: document.body,
    intro: true,
    props: {
      close,
      opts,
    },
  });
  return promise.finally(() => {
    outroAndDestroy(dialog);
  });
};

export const mapInput = (input) => {
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
