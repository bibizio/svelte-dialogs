import { fireEvent, render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import MockedInput from "spec/__mocks__/MockedInput.svelte";
import Prompt from "src/components/Prompt.svelte";
import { getClose, getOptions } from "src/lib/ctx-manager";
import { defaultPromptOptions } from "src/lib/defaults";

jest.mock("src/lib/ctx-manager", () => ({
  __esModule: true,
  getOptions: jest.fn(),
  getClose: jest.fn(),
}));

describe("Prompt", () => {
  const title = "test title";

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    const inputs = ["test input 1", "test input 2"];
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    const { queryByTestId } = render(Prompt, { inputs });

    const form = queryByTestId("prompt__form");
    expect(form).toHaveClass(defaultPromptOptions.formClass);

    inputs.forEach((inputText, idx) => {
      const formElement = queryByTestId("prompt__form-element-" + idx);
      expect(formElement).toHaveClass(defaultPromptOptions.formElementClass);

      const label = queryByTestId("prompt__form-label-" + idx);
      expect(label).toHaveClass(defaultPromptOptions.formLabelClass);
      expect(label).toHaveTextContent(inputText);

      const input = queryByTestId("prompt__form-input-" + idx);
      expect(input).toHaveClass(defaultPromptOptions.formInputClass);
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
    getOptions.mockReturnValue({ ...defaultPromptOptions, title, resetButton: false });
    const { queryByTestId } = render(Prompt);

    const resetButton = queryByTestId("prompt__reset-button");
    expect(resetButton).not.toBeInTheDocument();
  });

  it("should have labels for right inputs ", async () => {
    const inputs = ["test input 1", "test input 2"];
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    const { queryByTestId } = render(Prompt, { inputs });

    inputs.forEach((_, idx) => {
      const label = queryByTestId("prompt__form-label-" + idx);
      const input = queryByTestId("prompt__form-input-" + idx);
      expect(label.getAttribute("for")).toBe(input.getAttribute("id"));
    });
  });

  it("should render with html string buttons text", async () => {
    const cancelButtonText = '<p data-testid="test-cancel-button-text">test string</p>';
    const resetButtonText = '<p data-testid="test-reset-button-text">test string</p>';
    const submitButtonText = '<p data-testid="test-submit-button-text">test string</p>';
    getOptions.mockReturnValue({
      ...defaultPromptOptions,
      title,
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
      "default input",
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    const { queryByTestId } = render(Prompt, { inputs });

    const defaultInput = queryByTestId("prompt__form-input-0");
    expect(defaultInput).toBeInTheDocument();

    const customInput = queryByTestId("mocked-input__input");
    const customLabel = queryByTestId("mocked-input__label");
    expect(customInput).toBeInTheDocument();
    expect(customLabel).toHaveTextContent("custom input");
  });

  it("should call close with null on cancel", async () => {
    const closeMock = jest.fn();
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Prompt);

    const cancelButton = queryByTestId("prompt__cancel-button");
    await fireEvent.click(cancelButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith(null);
  });

  it("should reset inputs on reset", async () => {
    const inputs = [
      "default input",
      "default input",
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    const { queryByTestId } = render(Prompt, { inputs });

    const defaultInput = queryByTestId("prompt__form-input-0");
    const customInput = queryByTestId("mocked-input__input");

    userEvent.type(defaultInput, "test default input text");
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
      "default input",
      "default input",
      { component: MockedInput, props: { label: "custom input", id: "custom-input-id" } },
    ];
    const closeMock = jest.fn();
    getClose.mockReturnValue(closeMock);
    getOptions.mockReturnValue({ ...defaultPromptOptions, title });
    const { queryByTestId } = render(Prompt, { inputs });

    const defaultInput = queryByTestId("prompt__form-input-0");
    const customInput = queryByTestId("mocked-input__input");

    userEvent.type(defaultInput, "test default input text");
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
});
