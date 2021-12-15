import { fireEvent, render } from "@testing-library/svelte";
import Alert from "src/components/Alert.svelte";
import { getClose, getOptions } from "src/lib/ctx-manager";
import { defaultAlertOptions } from "src/lib/defaults";

jest.mock("src/lib/ctx-manager", () => ({
  __esModule: true,
  getOptions: jest.fn(),
  getClose: jest.fn(),
}));

describe("Alert", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    getOptions.mockReturnValue(defaultAlertOptions);
    const { queryByTestId } = render(Alert);

    const dismissButton = queryByTestId("alert__dismiss-button");
    expect(dismissButton).toHaveClass(defaultAlertOptions.dismissButtonClass);
    expect(dismissButton).toHaveTextContent(defaultAlertOptions.dismissButtonText);
  });

  it("should render with html string dismiss button text", async () => {
    const dismissButtonText = `
    <p data-testid="test-string-testid">test string</p>
    `;
    getOptions.mockReturnValue({ ...defaultAlertOptions, dismissButtonText });
    const { queryByTestId } = render(Alert);

    const dismissButtonParagraph = queryByTestId("test-string-testid");
    expect(dismissButtonParagraph).toHaveTextContent("test string");
  });

  it("should call close on dismiss", async () => {
    const closeMock = jest.fn();
    getOptions.mockReturnValue(defaultAlertOptions);
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Alert);

    const dismissButton = queryByTestId("alert__dismiss-button");
    await fireEvent.click(dismissButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith();
  });
});
