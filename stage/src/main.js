import App from "./App.svelte";
import { dialogs, Confirm } from "svelte-dialogs";
// dialogs.config({
//   warning: {
//     content: Confirm,
//     title: "You're doing something really dangerous...",
//     text: "Are you sure you want to continue?",
//     confirmButtonText: "yes",
//     declineButtonText: "no",
//     confirmButtonClass: "dialog_button dialog_button--primary",
//     declineButtonClass: "dialog_button dialog_button--decline",
//   },
// });

const app = new App({
  target: document.body,
  props: {},
});

export default app;
