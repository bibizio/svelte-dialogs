import "./lib/styles";
import { config } from "./lib/configuration";
import { alert, confirm, modal } from "./lib/callers";

export { DialogContent } from "./components";
export { getClose, getOptions } from "./lib/ctx-manager";
export const dialogs = { alert, confirm, modal, config };
