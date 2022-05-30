import { DialogCore } from "../components";
import { outroAndDestroy } from "./utils";

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
