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
    const { queryByTestId } = render(DialogInput, { type: "checkbox" });

    await tick();

    const input = queryByTestId("dialog-input__input");
    expect(input.nodeName).toBe("INPUT");
    expect(input.getAttribute("type")).toBe("checkbox");

    expect(input.checked).toBe(false);
    userEvent.click(input);
    expect(input.checked).toBe(true);
    userEvent.click(input);
    expect(input.checked).toBe(false);
  });

  it("should bind files to value if type is file", async () => {
    const { queryByTestId } = render(DialogInput, { type: "file" });
    const fileName = "a file.name";
    const blob = new Blob([""]);
    const file = new File([blob], fileName);

    await tick();
    const input = queryByTestId("dialog-input__input");
    userEvent.upload(input, file);

    expect(input.nodeName).toBe("INPUT");
    expect(input.getAttribute("type")).toBe("file");
    expect(input.files.length).toBe(1);
    expect(input.files[0].name).toBe(fileName);
  });

  it("should handle type file with multiple attribute", async () => {
    const { queryByTestId } = render(DialogInput, { type: "file", multiple: true });
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
    expect(input.files.length).toBe(2);
    expect(input.files[0].name).toBe(fileName1);
    expect(input.files[1].name).toBe(fileName2);
  });

  it("should handle restProps on input", async () => {
    const style = "color: red;";
    const { queryByTestId } = render(DialogInput, { style });

    await tick();
    const input = queryByTestId("dialog-input__input");

    expect(input).toHaveStyle(style);
  });
});
