import { fireEvent, render } from "@testing-library/svelte";
import Confirm from "src/components/Confirm.svelte";
import { getClose, getOptions } from "src/lib/ctx-manager";
import { defaultConfirmOptions } from "src/lib/defaults";

jest.mock("src/lib/ctx-manager", () => ({
  __esModule: true,
  getOptions: jest.fn(),
  getClose: jest.fn(),
}));

describe("Confirm", () => {
  const title = "test title";

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    getOptions.mockReturnValue({ ...defaultConfirmOptions, title });
    const { queryByTestId } = render(Confirm);

    const declineButton = queryByTestId("confirm__decline-button");
    expect(declineButton).toHaveClass(defaultConfirmOptions.declineButtonClass);
    expect(declineButton).toHaveTextContent(defaultConfirmOptions.declineButtonText);

    const confirmButton = queryByTestId("confirm__confirm-button");
    expect(confirmButton).toHaveClass(defaultConfirmOptions.confirmButtonClass);
    expect(confirmButton).toHaveTextContent(defaultConfirmOptions.confirmButtonText);
  });

  it("should render with html string confirm and decline buttons text", async () => {
    const confirmButtonText = '<p data-testid="test-confirm-button-text">test string</p>';
    const declineButtonText = '<p data-testid="test-decline-button-text">test string</p>';
    getOptions.mockReturnValue({ ...defaultConfirmOptions, title, confirmButtonText, declineButtonText });
    const { queryByTestId } = render(Confirm);

    const confirmButtonParagraph = queryByTestId("test-confirm-button-text");
    expect(confirmButtonParagraph).toHaveTextContent("test string");
    const declineButtonParagraph = queryByTestId("test-decline-button-text");
    expect(declineButtonParagraph).toHaveTextContent("test string");
  });

  it("should call close with true on confirm", async () => {
    const closeMock = jest.fn();
    getOptions.mockReturnValue({ ...defaultConfirmOptions, title });
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Confirm);

    const confirmButton = queryByTestId("confirm__confirm-button");
    await fireEvent.click(confirmButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith(true);
  });

  it("should call close with false on decline", async () => {
    const closeMock = jest.fn();
    getOptions.mockReturnValue({ ...defaultConfirmOptions, title });
    getClose.mockReturnValue(closeMock);
    const { queryByTestId } = render(Confirm);

    const declineButton = queryByTestId("confirm__decline-button");
    await fireEvent.click(declineButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledWith(false);
  });
});
