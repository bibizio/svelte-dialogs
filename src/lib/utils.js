import { check_outros, group_outros, transition_out } from "svelte/internal";
import { DialogCore } from "../components";

export const isTitleTextContent = (_) => Object.keys(_).length == 2 && _.title && _.text;

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
