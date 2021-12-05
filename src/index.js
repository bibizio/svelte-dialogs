import "./lib/styles";
import { config } from "./lib/configuration";
import { alert, confirm, modal, prompt } from "./lib/callers";

export { Dialog, DialogContent } from "./components";
export { getClose, getOptions } from "./lib/ctx-manager";
export const dialogs = { alert, confirm, modal, prompt, config };
