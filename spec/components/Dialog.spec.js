import { render, fireEvent } from "@testing-library/svelte";
import Dialog from "src/components/Dialog.svelte";
import { defaultDialogOptions } from "src/lib/defaults";
import { tick } from "svelte";
import DialogSlotFixture from "spec/__fixtures__/DialogSlotFixture.svelte";

describe("Dialog", () => {
  const testData = "test data";

  it("should show and hide DialogCore", async () => {
    const { component, queryByTestId } = render(Dialog);

    let dialog = queryByTestId("dialog-core__dialog");
    expect(dialog).not.toBeInTheDocument();
    component.open();
    await tick();
    dialog = queryByTestId("dialog-core__dialog");
    expect(dialog).toBeInTheDocument();
    component.close();
    await testutils.wait(600);
    dialog = queryByTestId("dialog-core__dialog");
    expect(dialog).not.toBeInTheDocument();
  });

  it("should render with given options mixed with defaults", async () => {
    const options = {
      dialogClass: "test-dialog-class",
      titleId: "test-title-id",
      closeButtonText: "test close button text",
    };
    const { component, queryByTestId } = render(Dialog, { options });

    component.open();
    await tick();

    const overlay = queryByTestId("dialog-core__overlay");
    expect(overlay).toHaveClass(defaultDialogOptions.overlayClass);

    const dialog = queryByTestId("dialog-core__dialog");
    expect(dialog).toHaveClass(options.dialogClass);
    expect(dialog).toHaveAttribute("aria-labelledby", options.titleId);

    const button = queryByTestId("dialog-core__close-button");
    expect(button).toHaveClass(defaultDialogOptions.closeButtonClass);
    expect(button).toHaveTextContent(options.closeButtonText);
  });

  it("shold emit events", async () => {
    const { component } = render(Dialog);
    listen(component, ["show", "shown", "hide", "hidden"]);

    component.open();
    await testutils.wait(600);
    component.close();
    await testutils.wait(600);

    expect(component).toHaveFiredEventTimes("show", 1);
    expect(component).toHaveFiredEventTimes("shown", 1);
    expect(component).toHaveFiredEventTimes("hide", 1);
    expect(component).toHaveFiredEventTimes("hidden", 1);
    expect(component).toHaveFiredEventsInOrder(["show", "shown", "hide", "hidden"]);
  });

  it("should open with given data, and expose them to slot", async () => {
    const { component, queryByTestId } = render(DialogSlotFixture);

    component.open(testData);
    await tick();

    const dataParagraph = queryByTestId("dialog-slot-fixture__data-paragraph");
    expect(dataParagraph).toHaveTextContent(testData);
  });

  it("should emit close data on hide", async () => {
    const { component, queryByTestId } = render(DialogSlotFixture);
    listen(component, "hide");

    component.open(testData);
    await tick();

    const closeButton = queryByTestId("dialog-slot-fixture__close-button");
    await fireEvent.click(closeButton);

    expect(component).toHaveFiredEventTimes("hide", 1);
    expect(component).toHaveFiredEventWith("hide", testData);
  });

  it("should open with given data, and expose them with data()", async () => {
    const { component } = render(Dialog);
    component.open(testData);

    expect(component.data()).toBe(testData);
  });

  it("should get closed from outside emitting data on hide", async () => {
    const { component } = render(Dialog);
    listen(component, "hide");

    component.open();
    component.close(testData);

    expect(component).toHaveFiredEventTimes("hide", 1);
    expect(component).toHaveFiredEventWith("hide", testData);
  });
});
