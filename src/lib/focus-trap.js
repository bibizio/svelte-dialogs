// https://gist.github.com/JulienPradet/20dbb7ca06cbd9e2ec499bb2206aab55
let trapFocusList = [];

const focusableSelector =
  "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

if (typeof window !== "undefined") {
  const isNext = (event) => event.key === "Tab" && !event.shiftKey;
  const isPrevious = (event) => event.key === "Tab" && event.shiftKey;
  const trapFocusListener = (event) => {
    if (event.target === window) {
      return;
    }

    const eventTarget = event.target;

    const parentNode = trapFocusList.find((node) => node.contains(eventTarget));
    if (!parentNode) {
      return;
    }

    const focusable = parentNode.querySelectorAll(focusableSelector);
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

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

export const focusTrap = (node) => {
  node.setAttribute("tabindex", "-1");
  const firstFocusable = node.querySelector(focusableSelector);
  firstFocusable ? firstFocusable.focus() : node.focus();

  trapFocusList.push(node);
  return {
    destroy() {
      node.removeAttribute("tabindex")
      trapFocusList = trapFocusList.filter((element) => element !== node);
    },
  };
};
