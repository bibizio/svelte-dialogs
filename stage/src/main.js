import App from "./App.svelte";
// import { dialogs } from "svelte-dialogs";
// dialogs.config({
//   global: {
//     overlayClass: "some-other-class",
//     dialogClass: "some-other-class",
//     closeButtonClass: "some-other-class",
//     closeButtonText: "close me",
//     headerClass: "some-other-class",
//     titleClass: "some-other-class",
//     bodyClass: "some-other-class",
//     footerClass: "some-other-class",
//   },
// });

const app = new App({
  target: document.body,
  props: {},
});

export default app;
