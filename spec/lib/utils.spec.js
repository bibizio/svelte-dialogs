import { fade } from "svelte/transition";
import {
  applyTransition,
  getPromptOptionsInput,
  inputInitialValueMapping,
  promptInputMapping,
  resolveConfigTransitions,
} from "../../src/lib/utils";
import MockedInput from "spec/__mocks__/MockedInput.svelte";

describe("utils", () => {
  describe("outroAndDestroy", () => {
    it.todo("should ");
  });

  describe("resolveConfigTransitions", () => {
    it("should return unaltered svelte/transition", () => {
      const transitions = { point: { transition: fade } };
      const actual = resolveConfigTransitions(transitions);
      expect(actual).toEqual(transitions);
    });

    it("should map string to svelte/transition", () => {
      const transitions = { point: { transition: "fade" } };
      const expected = { point: { transition: fade } };
      const actual = resolveConfigTransitions(transitions);
      expect(actual).toEqual(expected);
    });

    it("should throw if string is no svelte/transition", () => {
      const transitions = { point: { transition: "something" } };
      expect(() => {
        resolveConfigTransitions(transitions);
      }).toThrow();
    });
  });

  describe("applyTransition", () => {
    it("should return null if no point passed", () => {
      expect(applyTransition()).toBe(null);
    });

    it("should return null if no transition passed", () => {
      expect(applyTransition(undefined, { test: "test" })).toBe(null);
    });

    it("should call passed transition with provided props and node", () => {
      const transition = jest.fn();
      const props = "props";
      const node = "node";
      const point = { transition, props };

      applyTransition(node, point);

      expect(transition).toHaveBeenCalledTimes(1);
      expect(transition).toHaveBeenCalledWith(node, props);
    });
  });

  describe("inputInitialValueMapping", () => {
    it("should return value if present", () => {
      const value = "value";
      const input = { props: { value } };

      const actual = inputInitialValueMapping(input);

      expect(actual).toBe(value);
    });

    it("should return false if no value and type checkbox", () => {
      const type = "checkbox";
      const input = { props: { type } };

      const actual = inputInitialValueMapping(input);

      expect(actual).toBe(false);
    });

    it("should return undefined if no value and type not checkbox", () => {
      const type = "not checkbox";
      const input = { props: { type } };

      const actual = inputInitialValueMapping(input);

      expect(actual).toBe(undefined);
    });
  });

  describe("promptInputMapping", () => {
    it("should map string input", () => {
      const input = "input";
      const expected = { props: { label: input } };

      const actual = promptInputMapping(input);

      expect(actual).toEqual(expected);
    });

    it("should map svelteComponent input", () => {
      const input = MockedInput;
      const expected = { component: input, props: {} };

      const actual = promptInputMapping(input);

      expect(actual).toEqual(expected);
    });

    it("should map input props", () => {
      const input = { prop: "prop" };
      const expected = { props: input };

      const actual = promptInputMapping(input);

      expect(actual).toEqual(expected);
    });

    it("should return input if already mapped", () => {
      const input = { props: "props", component: "component" };

      const actual = promptInputMapping(input);

      expect(actual).toEqual(input);
    });
  });

  describe("getInputsWithProps", () => {
    const inputComponent = "inputComponent";
    const inputProp = "inputProp";
    const inputProps = { inputProp };
    const formElementClass = "formElementClass";
    const inputLabelClass = "inputLabelClass";
    const inputClass = "inputClass";
    const prop = "prop";

    const opts = { inputComponent, inputProps, formElementClass, inputLabelClass, inputClass };

    it("should map input to component and props if component differrent from opts inputComponent", () => {
      const input = { component: "component", props: { prop } };

      const actual = getPromptOptionsInput([input], opts);

      expect(actual).toEqual([input]);
    });

    it("should map input to component with merged props if component equal to inputComponent", () => {
      const input = { component: inputComponent, props: { prop } };
      const expected = {
        component: inputComponent,
        props: {
          label: "",
          formElementClass,
          inputLabelClass,
          inputClass,
          inputProp,
          prop,
        },
      };
      const actual = getPromptOptionsInput([input], opts);

      expect(actual).toEqual([expected]);
    });

    it("should map input to component with merged props if no component", () => {
      const input = { props: { prop } };
      const expected = {
        component: inputComponent,
        props: {
          label: "",
          formElementClass,
          inputLabelClass,
          inputClass,
          inputProp,
          prop,
        },
      };
      const actual = getPromptOptionsInput([input], opts);

      expect(actual).toEqual([expected]);
    });
  });
});
