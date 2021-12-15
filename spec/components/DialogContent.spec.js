import { render } from "@testing-library/svelte";
import DialogContentCustomSlotsFixture from "spec/__fixtures__/DialogContentCustomSlotsFixture.svelte";
import DialogContent from "src/components/DialogContent.svelte";
import { getOptions } from "src/lib/ctx-manager";
import { defaultDialogOptions } from "src/lib/defaults";

jest.mock("src/lib/ctx-manager", () => ({
  __esModule: true,
  getOptions: jest.fn(),
}));

describe("DialogContent", () => {
  const htmlString = `
    <p data-testid="test-string-testid">test string</p>
    `;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, title: "test title", text: "test text" });
    const { queryByTestId } = render(DialogContent);

    const header = queryByTestId("dialog-content__header");
    expect(header).toHaveClass(defaultDialogOptions.headerClass);

    const title = queryByTestId("dialog-content__title");
    expect(title).toHaveClass(defaultDialogOptions.titleClass);
    expect(title).toHaveAttribute("id", defaultDialogOptions.titleId);

    const body = queryByTestId("dialog-content__body");
    expect(body).toHaveClass(defaultDialogOptions.bodyClass);

    const footer = queryByTestId("dialog-content__footer");
    expect(footer).toHaveClass(defaultDialogOptions.footerClass);
  });

  it("should render default header slot with string title", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, title: "test title" });
    const { queryByTestId } = render(DialogContent);

    const title = queryByTestId("dialog-content__title");
    expect(title).toHaveTextContent("test title");
  });

  it("should render default header slot with html string title", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, title: htmlString });
    const { queryByTestId } = render(DialogContent);

    const title = queryByTestId("dialog-content__title");
    const testString = queryByTestId("test-string-testid");

    expect(title).toBeInTheDocument();
    expect(testString).toBeInTheDocument();
    expect(testString).toHaveTextContent("test string");
  });

  it("should not render body when no body slot or text option", async () => {
    getOptions.mockReturnValue(defaultDialogOptions);
    const { queryByTestId } = render(DialogContent);

    const body = queryByTestId("dialog-content__body");
    expect(body).not.toBeInTheDocument();
  });

  it("should render default body slot with string text", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, text: "test text" });
    const { queryByTestId } = render(DialogContent);

    const body = queryByTestId("dialog-content__body");
    expect(body).toHaveTextContent("test text");
  });

  it("should render default body slot with html string text", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, text: htmlString });
    const { queryByTestId } = render(DialogContent);

    const body = queryByTestId("dialog-content__body");
    const testString = queryByTestId("test-string-testid");

    expect(body).toBeInTheDocument();
    expect(testString).toBeInTheDocument();
    expect(testString).toHaveTextContent("test string");
  });

  it("should render custom slots", async () => {
    getOptions.mockReturnValue(defaultDialogOptions);
    const { queryByTestId } = render(DialogContentCustomSlotsFixture);

    const customHeader = queryByTestId("dialog-content-custom-slots-fixture__header");
    const customBody = queryByTestId("dialog-content-custom-slots-fixture__body");
    const customFooter = queryByTestId("dialog-content-custom-slots-fixture__footer");

    expect(customHeader).toBeInTheDocument();
    expect(customHeader).toHaveTextContent("test header");
    expect(customBody).toBeInTheDocument();
    expect(customBody).toHaveTextContent("test body");
    expect(customFooter).toBeInTheDocument();
    expect(customFooter).toHaveTextContent("test footer");
  });

  it("should show divider only if both body and title are present", async () => {
    getOptions.mockReturnValue({ ...defaultDialogOptions, title: "title", text: "text" });
    const { queryByTestId } = render(DialogContent);

    const divider = queryByTestId("dialog-content__divider");

    expect(divider).toBeInTheDocument();
  });

  it("should not show divider if body or title are missing", async () => {
    getOptions.mockReturnValue(defaultDialogOptions);
    const { queryByTestId } = render(DialogContent);

    const divider = queryByTestId("dialog-content__divider");

    expect(divider).not.toBeInTheDocument();
  });
});
