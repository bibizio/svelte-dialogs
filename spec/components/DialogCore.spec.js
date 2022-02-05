import { fireEvent, render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import DialogCoreDefaultSlotFixture from "spec/__fixtures__/DialogCoreDefaultSlotFixture.svelte";
import FocusTrapFixture from "spec/__fixtures__/FocusTrapFixture.svelte";
import MockedComponent from "spec/__mocks__/MockedComponent.svelte";
import DialogCore from "src/components/DialogCore.svelte";
import { defaultDialogOptions } from "src/lib/defaults";
import { outroAndDestroy } from "src/lib/utils";
import { tick } from "svelte";

describe("DialogCore", () => {
  const close = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with right options", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: defaultDialogOptions, close },
    });

    const overlay = queryByTestId("dialog-core__overlay");
    expect(overlay).toHaveClass(defaultDialogOptions.overlayClass);

    const dialog = queryByTestId("dialog-core__dialog");
    expect(dialog).toHaveClass(defaultDialogOptions.dialogClass);
    expect(dialog).toHaveAttribute("aria-labelledby", defaultDialogOptions.titleId);

    const button = queryByTestId("dialog-core__close-button");
    expect(button).toHaveClass(defaultDialogOptions.closeButtonClass);
    expect(button).toHaveTextContent(defaultDialogOptions.closeButtonText);
  });

  it("should call transitions", () => {
    const inSpy = jest.fn();
    const outSpy = jest.fn();
    const bgInSpy = jest.fn();
    const bgOutSpy = jest.fn();

    const transitions = {
      bgIn: {
        transition: bgInSpy,
        props: {
          y: 100,
        },
      },
      bgOut: {
        transition: bgOutSpy,
        props: {
          y: 200,
        },
      },
      in: {
        transition: inSpy,
        props: {
          y: 300,
        },
      },
      out: {
        transition: outSpy,
        props: {
          y: 400,
        },
      },
    };

    const opts = { ...defaultDialogOptions, transitions };

    const { component } = render(DialogCore, {
      intro: true,
      props: { opts, close },
    });

    expect(inSpy).toHaveBeenCalledTimes(1);
    expect(inSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining(opts.transitions.in.props)
    );

    expect(bgInSpy).toHaveBeenCalledTimes(1);
    expect(bgInSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining(opts.transitions.bgIn.props)
    );

    outroAndDestroy(component);

    expect(outSpy).toHaveBeenCalledTimes(1);
    expect(outSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining(opts.transitions.out.props)
    );

    expect(bgOutSpy).toHaveBeenCalledTimes(1);
    expect(bgOutSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining(opts.transitions.bgOut.props)
    );
  });

  it("should emit events", async () => {
    const { component } = render(DialogCore, {
      intro: true,
      props: { opts: defaultDialogOptions, close },
    });

    listen(component, ["show", "shown", "hide", "hidden"]);

    await tick();
    await testutils.wait(600);
    outroAndDestroy(component);
    await tick();
    await testutils.wait(600);
    await tick();

    // expect(component).toHaveFiredEventTimes("show", 1);
    expect(component).toHaveFiredEventTimes("shown", 1);
    expect(component).toHaveFiredEventTimes("hide", 1);
    expect(component).toHaveFiredEventTimes("hidden", 1);
    // expect(component).toHaveFiredEventsInOrder(["show", "shown", "hide", "hidden"]);
    expect(component).toHaveFiredEventsInOrder(["shown", "hide", "hidden"]);
  });

  it("should call event handlers defined in options", async () => {

    const onShowSpy = jest.fn();
    const onShownSpy = jest.fn();
    const onHideSpy = jest.fn();
    const onHiddenSpy = jest.fn();

    const opts = {
      ...defaultDialogOptions,
      onShow: onShowSpy,
      onShown: onShownSpy,
      onHide: onHideSpy,
      onHidden: onHiddenSpy,
    }

    const { component } = render(DialogCore, {
      intro: true,
      props: { opts, close },
    });

    await tick();
    await testutils.wait(600);
    outroAndDestroy(component);
    await tick();
    await testutils.wait(600);
    await tick();

    expect(onShowSpy).toHaveBeenCalledTimes(1);
    expect(onShownSpy).toHaveBeenCalledTimes(1);
    expect(onHideSpy).toHaveBeenCalledTimes(1);
    expect(onHiddenSpy).toHaveBeenCalledTimes(1);
  });

  it("should trap focus", async () => {
    const { getByTestId } = render(FocusTrapFixture);

    const closeButton = getByTestId("dialog-core__close-button");
    const fixtureButton = getByTestId("focus-trap-fixture__button");

    new Array(3).forEach(() => {
      userEvent.tab();
      expect(closeButton).toHaveFocus();
      expect(fixtureButton).not.toHaveFocus();
    });

    new Array(3).forEach(() => {
      userEvent.tab({ shift: true });
      expect(closeButton).toHaveFocus();
      expect(fixtureButton).not.toHaveFocus();
    });
  });

  it("should handle esc keydown when closeOnEsc: false", async () => {
    render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeOnEsc: false }, close },
    });

    userEvent.keyboard("{esc}");

    expect(close).not.toHaveBeenCalled();
  });

  it("should handle esc keydown when closeOnEsc: true", async () => {
    render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeOnEsc: true }, close },
    });

    userEvent.keyboard("{esc}");

    expect(close).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledWith();
  });

  it("should handle close button click", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeButton: true }, close },
    });

    const closeButton = queryByTestId("dialog-core__close-button");

    expect(closeButton).toBeInTheDocument();

    await fireEvent.click(closeButton);

    expect(close).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledWith();
  });

  it("should not render close button when closeButton: false", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeButton: false }, close },
    });

    const closeButton = queryByTestId("dialog-core__close-button");

    expect(closeButton).not.toBeInTheDocument();
  });

  it("should handle background click with closeOnBg: false", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeOnBg: false }, close },
    });

    const bg = queryByTestId("dialog-core__overlay");

    await fireEvent.click(bg);

    expect(close).not.toHaveBeenCalled();
  });

  it("should handle background click with closeOnBg: true", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: { ...defaultDialogOptions, closeOnBg: true }, close },
    });

    const bg = queryByTestId("dialog-core__overlay");

    await fireEvent.click(bg);

    expect(close).toHaveBeenCalledTimes(1);
    expect(close).toHaveBeenCalledWith();
  });

  it("should handle dialog click", async () => {
    const { queryByTestId } = render(DialogCore, {
      props: { opts: defaultDialogOptions, close },
    });

    const dialog = queryByTestId("dialog-core__dialog");

    await fireEvent.click(dialog);

    expect(close).not.toHaveBeenCalled();
  });

  it("should render default slot", async () => {
    const { queryByTestId } = render(DialogCoreDefaultSlotFixture);

    const mockedComponentParagraph = queryByTestId("mocked-component__paragraph");

    expect(mockedComponentParagraph).toBeInTheDocument();
    expect(mockedComponentParagraph).toHaveTextContent("test string");
  });

  it("should render string content", async () => {
    const opts = { ...defaultDialogOptions, closeButton: false, content: "test string" };
    const { queryByTestId } = render(DialogCore, {
      props: { opts, close },
    });

    const dialog = queryByTestId("dialog-core__dialog");

    expect(dialog).toHaveTextContent("test string");
  });

  it("should render html string content", async () => {
    const content = `
      <p data-testid="test-string-testid">test string</p>
      `;
    const opts = { ...defaultDialogOptions, closeButton: false, content };
    const { queryByTestId } = render(DialogCore, {
      props: { opts, close },
    });

    const testString = queryByTestId("test-string-testid");

    expect(testString).toBeInTheDocument();
    expect(testString).toHaveTextContent("test string");
  });

  it("should render custom component from options", async () => {
    const opts = {
      ...defaultDialogOptions,
      closeButton: false,
      content: MockedComponent,
      props: { string: "test string" },
    };
    const { queryByTestId } = render(DialogCore, {
      props: { opts, close },
    });

    const mockedComponentParagraph = queryByTestId("mocked-component__paragraph");

    expect(mockedComponentParagraph).toBeInTheDocument();
    expect(mockedComponentParagraph).toHaveTextContent("test string");
  });
});
