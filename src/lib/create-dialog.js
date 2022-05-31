import { DialogCore } from "../components";
import { outroAndDestroy } from "./utils";

/**
 * Renders a DialogCore with html body as target
 * @param {object} opts - configuration object
 * @returns {Promise} - the promise associated with the rendered DialogCore
 */
export const createDialog = (opts) => {
  let close;
  /** create the Promise and et a ref of the resolve method */
  const promise = new Promise((resolve) => {
    close = resolve;
  });

  /**
   * Create a DialogCore instance with options and resolve ref.
   * Target is set to the document body, intro make the
   * transitions work on instance creatrion.
   */
  const dialog = new DialogCore({
    target: document.body,
    intro: true,
    props: {
      close,
      opts,
    },
  });

  /**
   * Retrun the Promise associated with the resolve ref
   * passed as a prop.
   * outroAndDestroy make the transitions work on instance
   * destruction.
   */
  return promise.finally(() => {
    outroAndDestroy(dialog);
  });
};
