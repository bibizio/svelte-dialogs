import { defaultDialogConfigOptions } from "./defaults";
import { resolveConfigTransitions } from "./utils";

let customConfig = {};

/**
 * Sets the user configurations for dialogs
 * @param {object} options - options to set
 * @param {object} options.global - global options
 * @param {object} options.alert - alert options
 * @param {object} options.confirm - confirm options
 * @param {object} options.prompt - prompt options
 * @param {object} options.error - error options
 * @param {object} options.success - success options
 * @param {object} options.warning - warning options
 */
export const config = (options) => {
  customConfig = options;
};

/**
 * Resolves the options to be passed at a dialog
 * @param {string} type - configuration type to retrieve
 * @param {object} options - options passed in callers
 * @returns {object} - the resolved options
 */
export const getOpts = (type, options = {}) => {
  /** retrieve configurations for the iven type */
  const defaults = defaultDialogConfigOptions[type];
  const custom = customConfig[type] ?? {};
  const customGlobal = customConfig.global ?? {};

  /**
   * Merge props separately for nested properties.
   * It's not necessary to clone deep, props
   * should be overwritten completely
   */
  const props = {
    ...defaults.props,
    ...customGlobal.props,
    ...custom.props,
    ...options.props,
  };

  /**
   * Merge transitions configuration and
   * resolve the string transitions
   */
  const transitions = resolveConfigTransitions({
    ...defaults.transitions,
    ...customGlobal.transitions,
    ...custom.transitions,
    ...options.transitions,
  });

  /** merge all the options */
  return {
    ...defaults,
    ...customGlobal,
    ...custom,
    ...options,
    props,
    transitions,
  };
};
