import MockedComponent from "spec/__mocks__/MockedComponent.svelte";
import { alert, confirm, modal, prompt, success, error, warning } from "src/lib/callers";
import { createDialog } from "src/lib/create-dialog";
import { getOpts } from "src/lib/configuration";
import { getInputsWithProps, promptInputMapping } from "src/lib/utils";

jest.mock("src/lib/create-dialog", () => ({
  __esModule: true,
  createDialog: jest.fn(),
}));

const inputWithProps = "inputs with props";
jest.mock("src/lib/utils", () => ({
  __esModule: true,
  promptInputMapping: jest.fn((_) => _),
  getInputsWithProps: jest.fn(() => "inputs with props"),
}));

const props = {};
jest.mock("src/lib/configuration", () => ({
  __esModule: true,
  getOpts: jest.fn((_, options) => ({ props, ...options })),
}));

describe("callers", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("modal", () => {
    it("should set content with string options", () => {
      modal("test content");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("global");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, content: "test content" });
    });

    it("should set content and props with SvelteComponent options with props", () => {
      modal(MockedComponent, { string: "test string" });

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("global");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({
        content: MockedComponent,
        props: { string: "test string" },
      });
    });

    it("should set string content via options", () => {
      const options = { content: "test content" };
      modal(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("global", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, ...options });
    });

    it("should set SvelteCompnent content and props via options", () => {
      const options = { content: MockedComponent, props: { string: "test string" } };
      modal(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("global", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({
        content: MockedComponent,
        props: { string: "test string" },
      });
    });
  });

  describe("alert", () => {
    it("should set title with string options", () => {
      alert("test string");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("alert");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test string" });
    });

    it("should set content via options", () => {
      const options = { title: "test title", text: "test text" };
      alert(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("alert", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test title", text: "test text" });
    });
  });

  describe("confirm", () => {
    it("should set title with string options", () => {
      confirm("test string");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("confirm");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test string" });
    });

    it("should set content via options", () => {
      const options = { title: "test title", text: "test text" };
      confirm(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("confirm", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test title", text: "test text" });
    });
  });

  describe("error", () => {
    it("should set text with string options", () => {
      error("test string");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("error");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, text: "test string" });
    });

    it("should set content via options", () => {
      const options = { title: "test title", text: "test text" };
      error(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("error", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test title", text: "test text" });
    });
  });

  describe("success", () => {
    it("should set text with string options", () => {
      success("test string");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("success");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, text: "test string" });
    });

    it("should set content via options", () => {
      const options = { title: "test title", text: "test text" };
      success(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("success", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test title", text: "test text" });
    });
  });

  describe("warning", () => {
    it("should set text with string options", () => {
      warning("test string");

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("warning");

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, text: "test string" });
    });

    it("should set content via options", () => {
      const options = { title: "test title", text: "test text" };
      warning(options);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("warning", options);

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({ props, title: "test title", text: "test text" });
    });
  });

  describe("prompt", () => {
    it("should map single input to array", () => {
      const input = "test string";
      prompt(input);

      expect(promptInputMapping).toHaveBeenCalledTimes(1);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("prompt", undefined);

      expect(getInputsWithProps).toHaveBeenCalledTimes(1);
      expect(getInputsWithProps).toHaveBeenCalledWith([input], { props });

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({
        props: { inputs: inputWithProps },
      });
    });

    it("should map multiple inputs to array", () => {
      const input = "test string";
      prompt([input, input]);

      expect(promptInputMapping).toHaveBeenCalledTimes(2);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("prompt", undefined);

      expect(getInputsWithProps).toHaveBeenCalledTimes(1);
      expect(getInputsWithProps).toHaveBeenCalledWith([input, input], { props });

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({
        props: { inputs: inputWithProps },
      });
    });

    it("should use additional options", () => {
      const input = "test string";
      const options = { input };
      prompt(input, options);

      expect(promptInputMapping).toHaveBeenCalledTimes(1);

      expect(getOpts).toHaveBeenCalledTimes(1);
      expect(getOpts).toHaveBeenCalledWith("prompt", options);

      expect(getInputsWithProps).toHaveBeenCalledTimes(1);
      expect(getInputsWithProps).toHaveBeenCalledWith([input], { props, input });

      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith({
        input,
        props: { inputs: inputWithProps },
      });
    });
  });
});
