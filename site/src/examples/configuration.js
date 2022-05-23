const appContent = `<script>
    import { dialogs } from "svelte-dialogs";

    /** 
     * configuration should be imported in root main.js
     * this import is here just for the REPL to work 
     */
    import './svelte-dialogs-config.js'
</script>

<button on:click={
    () => dialogs.confirm("are you sure?").then((confirm) => dialogs.alert({ confirm }))}
>Click me!</button>`;

const configContent = `import { dialogs } from "svelte-dialogs";
import { fade } from "svelte/transition";
import CustomAlert from "./CustomAlert.svelte";

const global = {
  transitions: {
    in: {
      transition: fade,
      props: {
        duration: 2000,
      },
    },
    out: {
      transition: 'slide',
      props: {
        duration: 2000,
      },
    },
  },
};

const alert = {
  content: CustomAlert,
  closeButton: true,
};

const confirm = {
  confirmButtonText: "aye",
  declineButtonText: "nay",
};

dialogs.config({
  global,
  alert,
  confirm,
});`;

const customAlertContent = `<script>
    import {getOptions} from 'svelte-dialogs'
    
    const {confirm} = getOptions();
    const text = confirm ? "let's do it" : "nevermind"
</script>

<div>{text}</div>`;

export const configuration = {
  name: "Configuration",
  files: [
    {
      name: "App.svelte",
      type: "svelte",
      content: appContent,
    },
    {
      name: "svelte-dialogs-config.js",
      type: "js",
      content: configContent,
    },
    {
      name: "CustomAlert.svelte",
      type: "svelte",
      content: customAlertContent,
    },
  ],
};
