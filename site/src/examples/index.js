import { helloWorld } from "./hello-world";
import { options } from "./options";
import { promiseBased } from "./promise-based";
import { templateEventsBased } from "./template-events-based";
import { htmlString } from "./html-string";
import { customComponents } from "./custom-components";
import { promptInputTypes } from "./prompt-input-types";
import { configuration } from "./configuration";

export const examples = [
  helloWorld,
  options,
  promiseBased,
  templateEventsBased,
  htmlString,
  customComponents,
  promptInputTypes,
  configuration,
];

export const mapFile = ({ name, type, content }) => ({
  name: name.replace(/.\w+$/, ""),
  type,
  source: content,
});
