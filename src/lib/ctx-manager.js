import { getContext, setContext } from "svelte";

const closeSym = Symbol("close");
const optsSym = Symbol("opts");

const getFromContext = (key) => {
  try {
    return getContext(key);
  } catch (cause) {
    throw new Error(
      `Context element ${key.description} can be retrieved only on component initialization`,
      { cause }
    );
  }
};

export const getClose = () => getFromContext(closeSym);
export const setClose = (close) => setContext(closeSym, close);
export const getOptions = () => getFromContext(optsSym);
export const setOptions = (opts) => setContext(optsSym, opts);
