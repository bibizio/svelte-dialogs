let trapFocusList = [];

const focusableSelector =
  "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

if (typeof window !== "undefined") {
  const isNext = (event) => event.key === "Tab" && !event.shiftKey;
  const isPrevious = (event) => event.key === "Tab" && event.shiftKey;
  const trapFocusListener = (event) => {
    /** if the target windows, then focus should work */
    if (event.target === window) {
      return;
    }

    const eventTarget = event.target;

    /** if the target is not a trapped node child, then the parent could't be focused. */
    const parentNode = trapFocusList.find((node) => node.contains(eventTarget));
    if (!parentNode) {
      return;
    }

    /**
     * Search for all focusable children of the node.
     * If there aren't any, then keep focusing the node itself.
     */
    const focusable = parentNode.querySelectorAll(focusableSelector);
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    /** traps the focus in the focusables */
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (isNext(event) && event.target === last) {
      event.preventDefault();
      first.focus();
    } else if (isPrevious(event) && event.target === first) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener("keydown", trapFocusListener);
}

/**
 * Focus trap svelte action
 * https://gist.github.com/JulienPradet/20dbb7ca06cbd9e2ec499bb2206aab55
 * @param {Element} node - the target html element
 * @returns {object} - the object containing the destroy function
 */
export const focusTrap = (node) => {
  /** makes the current node focusable by javascript */
  node.setAttribute("tabindex", "-1");

  /** search for a focusable in node children. If not present, fous the node */
  const firstFocusable = node.querySelector(focusableSelector);
  firstFocusable ? firstFocusable.focus() : node.focus();

  /** adds the node in the trapped elements */
  trapFocusList.push(node);

  return {
    destroy() {
      /** remove the tabindex attribute and remove the node from the trapped elements */
      node.removeAttribute("tabindex");
      trapFocusList = trapFocusList.filter((element) => element !== node);
    },
  };
};
