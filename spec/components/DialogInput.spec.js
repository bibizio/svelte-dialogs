import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { DialogInput } from "src/components";
import { tick } from "svelte";

describe("DialogInput", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with default props", async () => {
    const { queryByTestId } = render(DialogInput);

    await tick();

    const formElement = queryByTestId("dialog-input__form-element");
    expect(formElement).not.toHaveClass();
    const label = queryByTestId("dialog-input__label");
    expect(label).not.toHaveClass();
    expect(label).not.toHaveTextContent();
    const input = queryByTestId("dialog-input__input");
    expect(input).not.toHaveClass();
    expect(input.getAttribute("id")).toBe(label.getAttribute("for"));
    expect(input.value).toBeFalsy();
  });

  it("should render with given props", async () => {
    const props = {
      value: "a value",
      label: "a label",
      id: "an-id",
      formElementClass: "formElementClass",
      inputLabelClass: "inputLabelClass",
      inputClass: "inputClass",
    };
    const { queryByTestId } = render(DialogInput, props);

    await tick();

    const formElement = queryByTestId("dialog-input__form-element");
    expect(formElement).toHaveClass(props.formElementClass);
    const label = queryByTestId("dialog-input__label");
    expect(label).toHaveClass(props.inputLabelClass);
    expect(label).toHaveTextContent(props.label);
    const input = queryByTestId("dialog-input__input");
    expect(input).toHaveClass(props.inputClass);
    expect(input.getAttribute("id")).toBe(props.id);
    expect(label.getAttribute("for")).toBe(props.id);
    expect(input.value).toBe(props.value);
  });

  it("should handle required attribute", async () => {
    const { queryByTestId } = render(DialogInput, { required: true, label: "required" });

    await tick();

    const label = queryByTestId("dialog-input__label");
    expect(label).toHaveTextContent("required *");
    const input = queryByTestId("dialog-input__input");
    expect(input).toBeRequired();
  });

  it("should render textarea if type is textarea", async () => {
    const { queryByTestId } = render(DialogInput, { type: "textarea" });

    await tick();

    const { nodeName } = queryByTestId("dialog-input__input");
    expect(nodeName).toBe("TEXTAREA");
  });

  it("should bind checked to value if type is checkbox", async () => {
    const { queryByTestId, component } = render(DialogInput, { type: "checkbox" });

    await tick();

    const input = queryByTestId("dialog-input__input");
    expect(input.nodeName).toBe("INPUT");
    expect(input.getAttribute("type")).toBe("checkbox");

    const label = queryByTestId("dialog-input__label");

    expect(component.value).toBe(false);
    userEvent.click(input);
    expect(component.value).toBe(true);
    userEvent.click(label);
    expect(component.value).toBe(false);
  });

  it("should bind files to value if type is file", async () => {
    const { queryByTestId, component } = render(DialogInput, { type: "file" });
    const fileName = "a file.name";
    const blob = new Blob([""]);
    const file = new File([blob], fileName);

    await tick();
    const input = queryByTestId("dialog-input__input");
    userEvent.upload(input, file);

    expect(input.nodeName).toBe("INPUT");
    expect(input.getAttribute("type")).toBe("file");

    const { value } = component;
    expect(value.length).toBe(1);
    expect(value[0].name).toBe(fileName);
  });

  it("should handle type file with multiple attribute", async () => {
    const { queryByTestId, component } = render(DialogInput, { type: "file", multiple: true });
    const fileName1 = "file1.name";
    const fileName2 = "file2.name";
    const blob = new Blob([""]);
    const file1 = new File([blob], fileName1);
    const file2 = new File([blob], fileName2);

    await tick();
    const input = queryByTestId("dialog-input__input");
    userEvent.upload(input, [file1, file2]);

    expect(input.nodeName).toBe("INPUT");
    expect(input.getAttribute("type")).toBe("file");

    const { value } = component;
    expect(value.length).toBe(2);
    expect(value[0].name).toBe(fileName1);
    expect(value[1].name).toBe(fileName2);
  });

  it("should render fieldset with inputs and bind value to group if type is radio", async () => {
    const option = "a radio input";
    const label = "radio inputs";
    const { queryByTestId, queryAllByTestId, component } = render(DialogInput, {
      type: "radio",
      options: [option],
      label,
    });

    await tick();

    const fieldset = queryByTestId("dialog-input__fieldset");
    expect(fieldset).toBeInTheDocument();

    const legend = queryByTestId("dialog-input__legend");
    expect(legend).toHaveTextContent(label);

    const labels = queryAllByTestId("dialog-input__label");
    expect(labels[0]).toHaveTextContent(option);

    const inputs = queryAllByTestId("dialog-input__input");
    expect(inputs[0].getAttribute("type")).toBe("radio");

    expect(component.value).toBe(undefined);
    userEvent.click(inputs[0]);
    expect(component.value).toBe(option);
  });

  it("should render select if type is select", async () => {
    const { queryByTestId } = render(DialogInput, { type: "select" });

    await tick();

    const { nodeName } = queryByTestId("dialog-input__input");
    expect(nodeName).toBe("SELECT");
  });

  it("should handle select initial value", async () => {
    const options = ["option 1", "option 2", "option 3"];
    const { queryByTestId, component } = render(DialogInput, {
      type: "select",
      options,
      value: "option 2",
    });

    await tick();

    const select = queryByTestId("dialog-input__input");
    expect(select.selectedIndex).toBe(1);
    expect(component.value).toBe("option 2");
  });

  it("should bind select value", async () => {
    const options = ["option 1", "option 2", "option 3"];
    const { queryByTestId, queryAllByTestId, component } = render(DialogInput, {
      type: "select",
      options,
      value: "option 2",
    });

    await tick();

    const select = queryByTestId("dialog-input__input");
    const optionElements = queryAllByTestId("dialog-input__option");

    userEvent.selectOptions(select, optionElements[1]);

    expect(select.selectedIndex).toBe(1);
    expect(component.value).toBe("option 2");
  });

  it("should select with multiple attribute", async () => {
    const options = ["option 1", "option 2", "option 3"];
    const { queryByTestId, queryAllByTestId, component } = render(DialogInput, {
      type: "select",
      options,
      multiple: true,
    });

    await tick();

    expect(component.value).toEqual([]);

    const select = queryByTestId("dialog-input__input");
    const optionElements = queryAllByTestId("dialog-input__option");
    userEvent.selectOptions(select, [optionElements[0], optionElements[2]]);

    expect(component.value).toEqual(["option 1", "option 3"]);
  });

  it("should handle restProps on input", async () => {
    const style = "color: red;";
    const { queryByTestId } = render(DialogInput, { style });

    await tick();
    const input = queryByTestId("dialog-input__input");

    expect(input).toHaveStyle(style);
  });
});
