import { getContext, setContext } from "svelte";

const closeSym = Symbol("close");
const optsSym = Symbol("opts");

/**
 *
 * @param {symbol} key - the key associated with the property stored in context
 * @returns {any} - the property sored in context
 * @throws {Error} - if called after component initialization
 */
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

/**
 * Retrieves the close function from context
 * @returns {function} - the close function stored in context
 */
export const getClose = () => getFromContext(closeSym);
/**
 * Put the close function in context
 * @param {function} close - the function to store in context
 * @returns {function} - the close function stored in context
 */
export const setClose = (close) => setContext(closeSym, close);
/**
 * Retrieves the options object from context
 * @returns {object} - the options object stored in context
 */
export const getOptions = () => getFromContext(optsSym);
/**
 * Put the options object in context
 * @param {object} close - the object to store in context
 * @returns {object} - the options object stored in context
 */
export const setOptions = (opts) => setContext(optsSym, opts);
