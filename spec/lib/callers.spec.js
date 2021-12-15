import MockedComponent from "spec/__mocks__/MockedComponent.svelte";
import { DialogInput } from "src/components";
import { alert, confirm, modal, prompt } from "src/lib/callers";
import { createDialog } from "src/lib/utils";

jest.mock("src/lib/utils", () => ({
  __esModule: true,
  createDialog: jest.fn(),
  mapInput: jest.requireActual("src/lib/utils").mapInput,
}));

describe("callers", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("modal", () => {
    it("should set content with string options", () => {
      modal("test content");
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ content: "test content" })
      );
    });

    it("should set content and props with SvelteCompnent options with props", () => {
      modal(MockedComponent, { string: "test string" });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ content: MockedComponent, props: { string: "test string" } })
      );
    });

    it("should set string content via options", () => {
      modal({ content: "test content" });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ content: "test content" })
      );
    });

    it("should set SvelteCompnent content and props via options", () => {
      modal({ content: MockedComponent, props: { string: "test string" } });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ content: MockedComponent, props: { string: "test string" } })
      );
    });
  });

  describe("alert", () => {
    it("should set title with string options", () => {
      alert("test string");
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(expect.objectContaining({ title: "test string" }));
    });

    it("should set content via options", () => {
      alert({ title: "test title", text: "test text" });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ title: "test title", text: "test text" })
      );
    });
  });

  describe("confirm", () => {
    it("should set title with string options", () => {
      confirm("test string");
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(expect.objectContaining({ title: "test string" }));
    });

    it("should set content via options", () => {
      confirm({ title: "test title", text: "test text" });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({ title: "test title", text: "test text" })
      );
    });
  });

  describe("prompt", () => {
    it("should set props with string input", () => {
      prompt("test string");
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          props: { inputs: [{ component: DialogInput, props: { label: "test string" } }] },
        })
      );
    });

    it("should set props with props input", () => {
      prompt({ label: "test string" });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          props: { inputs: [{ component: DialogInput, props: { label: "test string" } }] },
        })
      );
    });

    it("should set props with SvelteComponent input", () => {
      prompt(MockedComponent);
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          props: { inputs: [{ component: MockedComponent, props: {} }] },
        })
      );
    });

    it("should set props with SvelteComponent and props input", () => {
      prompt({ component: MockedComponent, props: { label: "test string" } });
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          props: { inputs: [{ component: MockedComponent, props: { label: "test string" } }] },
        })
      );
    });

    it("should set props with string and SvelteComponent with props input array", () => {
      prompt([
        "test string",
        { component: MockedComponent, props: { label: "test string" } },
        "test string",
      ]);
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          props: {
            inputs: [
              { component: DialogInput, props: { label: "test string" } },
              { component: MockedComponent, props: { label: "test string" } },
              { component: DialogInput, props: { label: "test string" } },
            ],
          },
        })
      );
    });

    it("should set content with options", () => {
      prompt(
        [
          "test string",
          { component: MockedComponent, props: { label: "test string" } },
          "test string",
        ],
        { title: "test title" }
      );
      expect(createDialog).toHaveBeenCalledTimes(1);
      expect(createDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "test title",
          props: {
            inputs: [
              { component: DialogInput, props: { label: "test string" } },
              { component: MockedComponent, props: { label: "test string" } },
              { component: DialogInput, props: { label: "test string" } },
            ],
          },
        })
      );
    });
  });
});
