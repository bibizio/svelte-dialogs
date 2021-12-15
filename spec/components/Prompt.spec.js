import { fireEvent, render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import MockedInput from "spec/__mocks__/MockedInput.svelte";
import { Prompt, DialogInput } from "src/components";
import { getClose, getOptions } from "src/lib/ctx-manager";
import { defaultPromptOptions } from "src/lib/defaults";
import { tick } from "svelte";

jest.mock("src/lib/ctx-manager", () => ({
  __esModule: true,
  getOptions: jest.fn(),
  getClose: jest.fn(),
}));

describe("Prompt", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    const inputs = [
      { component: DialogInput, props: { label: "test input 1" } },
      { component: DialogInput, props: { label: "test input 2" } },
    ];
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryByTestId, queryAllByTestId } = render(Prompt, { inputs });

    await tick();
    const form = queryByTestId("prompt__form");
    expect(form).toHaveClass(defaultPromptOptions.formClass);

    const formElements = queryAllByTestId("dialog-input__form-element");
    const labels = queryAllByTestId("dialog-input__label");
    const inputElements = queryAllByTestId("dialog-input__input");

    console.log(formElements);
    inputs.forEach((input, idx) => {
      expect(formElements[idx]).toHaveClass(defaultPromptOptions.formElementClass);

      expect(labels[idx]).toHaveClass(defaultPromptOptions.inputLabelClass);
      expect(labels[idx]).toHaveTextContent(input.props.label);

      expect(inputElements[idx]).toHaveClass(defaultPromptOptions.inputClass);
    });

    const cancelButton = queryByTestId("prompt__cancel-button");
    expect(cancelButton).toHaveClass(defaultPromptOptions.cancelButtonClass);
    expect(cancelButton).toHaveTextContent(defaultPromptOptions.cancelButtonText);

    const resetButton = queryByTestId("prompt__reset-button");
    expect(resetButton).toHaveClass(defaultPromptOptions.resetButtonClass);
    expect(resetButton).toHaveTextContent(defaultPromptOptions.resetButtonText);

    const submitButton = queryByTestId("prompt__submit-button");
    expect(submitButton).toHaveClass(defaultPromptOptions.submitButtonClass);
    expect(submitButton).toHaveTextContent(defaultPromptOptions.submitButtonText);
  });

  it("should not render reset button when resetButton: false", async () => {
    getOptions.mockReturnValue({ ...defaultPromptOptions, resetButton: false });
    const { queryByTestId } = render(Prompt);

    const resetButton = queryByTestId("prompt__reset-button");
    expect(resetButton).not.toBeInTheDocument();
  });

  it("should have labels for right inputs ", async () => {
    const inputs = [
      { component: DialogInput, props: { label: "" } },
      { component: DialogInput, props: { label: "" } },
    ];
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryAllByTestId } = render(Prompt, { inputs });

    const labels = queryAllByTestId("dialog-input__label");
    const inputElements = queryAllByTestId("dialog-input__input");

    inputs.forEach((_, idx) => {
      expect(labels[idx].getAttribute("for")).toBe(inputElements[idx].getAttribute("id"));
    });
  });

  it("should render with html string buttons text", async () => {
    const cancelButtonText = '<p data-testid="test-cancel-button-text">test string</p>';
    const resetButtonText = '<p data-testid="test-reset-button-text">test string</p>';
    const submitButtonText = '<p data-testid="test-submit-button-text">test string</p>';
    getOptions.mockReturnValue({
      ...defaultPromptOptions,
      cancelButtonText,
      resetButtonText,
      submitButtonText,
    });
    const { queryByTestId } = render(Prompt);

    const cancelButtonParagraph = queryByTestId("test-cancel-button-text");
    expect(cancelButtonParagraph).toHaveTextContent("test string");
    const resetButtonParagraph = queryByTestId("test-reset-button-text");
    expect(resetButtonParagraph).toHaveTextContent("test string");
    const submitButtonParagraph = queryByTestId("test-submit-button-text");
    expect(submitButtonParagraph).toHaveTextContent("test string");
  });

  it("should render custom and default inputs", () => {
    const inputs = [
      { component: DialogInput, props: { label: "test input 1" } },
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryByTestId } = render(Prompt, { inputs });

    const defaultInput = queryByTestId("dialog-input__input");
    expect(defaultInput).toBeInTheDocument();

    const customInput = queryByTestId("mocked-input__input");
    const customLabel = queryByTestId("mocked-input__label");
    expect(customInput).toBeInTheDocument();
    expect(customLabel).toHaveTextContent("custom input");
  });

  it("should call close with null on cancel", async () => {
    const closeMock = jest.fn();
    getOptions.mockReturnValue(defaultPromptOptions);
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Prompt);

    const cancelButton = queryByTestId("prompt__cancel-button");
    await fireEvent.click(cancelButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith(null);
  });

  it("should reset inputs on reset", async () => {
    const inputs = [
      { component: DialogInput, props: { label: "test input 1" } },
      { component: DialogInput, props: { label: "test input 2" } },
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryByTestId, queryAllByTestId } = render(Prompt, { inputs });

    const defaultInputs = queryAllByTestId("dialog-input__input");
    const customInput = queryByTestId("mocked-input__input");

    userEvent.type(defaultInputs[0], "test default input text");
    userEvent.type(customInput, "test custom input text");

    const resetButton = queryByTestId("prompt__reset-button");
    await fireEvent.click(resetButton);

    const submitButton = queryByTestId("prompt__submit-button");
    await fireEvent.click(submitButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith([undefined, undefined, undefined]);
  });

  it("should call close with inputs values array on submit", async () => {
    const inputs = [
      { component: DialogInput, props: { label: "test input 1" } },
      { component: DialogInput, props: { label: "test input 2" } },
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryByTestId, queryAllByTestId } = render(Prompt, { inputs });

    const defaultInputs = queryAllByTestId("dialog-input__input");
    const customInput = queryByTestId("mocked-input__input");

    userEvent.type(defaultInputs[0], "test default input text");
    userEvent.type(customInput, "test custom input text");

    const submitButton = queryByTestId("prompt__submit-button");
    await fireEvent.click(submitButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith([
      "test default input text",
      undefined,
      "test custom input text",
    ]);
  });

  /** skipped due to a jsdom bug
   * https://github.com/jsdom/jsdom/issues/2898
   */
  it.skip("should not submit when invalids and have touched class after", async () => {
    const inputs = [{ component: DialogInput, props: { label: "test input 1", required: true } }];
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    getOptions.mockReturnValue(defaultPromptOptions);
    const { queryByTestId } = render(Prompt, { inputs });

    const submitButton = queryByTestId("prompt__submit-button");
    await fireEvent.click(submitButton);

    expect(closeMock).not.toHaveBeenCalled();
  });

  it("should handle touched form class", async () => {
    const inputs = [{ component: DialogInput, props: { label: "test input 1", required: true } }];
    getOptions.mockReturnValue(defaultPromptOptions);
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Prompt, { inputs });

    const form = queryByTestId("prompt__form");
    expect(form).not.toHaveClass("touched");

    const submitButton = queryByTestId("prompt__submit-button");
    await fireEvent.click(submitButton);

    expect(form).toHaveClass("touched");

    const resetButton = queryByTestId("prompt__reset-button");
    await fireEvent.click(resetButton);

    expect(form).not.toHaveClass("touched");
  });
});
