import { config, getOpts, resolveTransitions } from "src/lib/configuration";
import { fade, blur, fly, slide, scale, draw, crossfade } from "svelte/transition";

jest.mock("src/lib/defaults", () => ({
  defaultDialogConfigOptions: {
    testType: {
      props: { prop: "default prop" },
      title: "default title",
      text: "default title",
      overlayClass: "default overlay class",
      dialogClass: "default dialog class",
      transitions: {
        bgIn: {
          transition: "blur",
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: "fly",
          props: { prop: "default bgOut prop" },
        },
        in: {
          transition: "slide",
          props: { prop: "default in prop" },
        },
        out: {
          transition: "fade",
          props: { prop: "default out prop" },
        },
      },
    },
  },
}));

const global = {
  props: { prop: "custom global prop" },
  text: "custom global title",
  transitions: {
    out: {
      transition: scale,
      props: { prop: "custom global out prop" },
    },
  },
};

const testType = {
  props: { prop: "custom prop" },
  overlayClass: "custom overlay class",
  transitions: {
    in: {
      transition: draw,
      props: { prop: "custom in prop" },
    },
  },
};

config({
  global,
});

const options = {
  props: { prop: "option prop" },
  dialogClass: "options dialog class",
  transitions: {
    bgOut: {
      transition: crossfade,
      props: { prop: "options bgOut prop" },
    },
  },
};

describe("configuration", () => {
  it("custom global should overwrite defaults", () => {
    const opts = getOpts("testType", {});
    expect(opts).toStrictEqual({
      props: { prop: "custom global prop" },
      title: "default title",
      text: "custom global title",
      overlayClass: "default overlay class",
      dialogClass: "default dialog class",
      transitions: {
        bgIn: {
          transition: blur,
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: fly,
          props: { prop: "default bgOut prop" },
        },
        in: {
          transition: slide,
          props: { prop: "default in prop" },
        },
        out: {
          transition: scale,
          props: { prop: "custom global out prop" },
        },
      },
    });
  });

  it("custom should overwrite custom global", () => {
    config({
      global,
      testType,
    });

    const opts = getOpts("testType", {});
    expect(opts).toStrictEqual({
      props: { prop: "custom prop" },
      title: "default title",
      text: "custom global title",
      overlayClass: "custom overlay class",
      dialogClass: "default dialog class",
      transitions: {
        bgIn: {
          transition: blur,
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: fly,
          props: { prop: "default bgOut prop" },
        },
        in: {
          transition: draw,
          props: { prop: "custom in prop" },
        },
        out: {
          transition: scale,
          props: { prop: "custom global out prop" },
        },
      },
    });
  });

  it("options should overwrite custom", () => {
    const opts = getOpts("testType", options);
    expect(opts).toStrictEqual({
      props: { prop: "option prop" },
      title: "default title",
      text: "custom global title",
      overlayClass: "custom overlay class",
      dialogClass: "options dialog class",
      transitions: {
        bgIn: {
          transition: blur,
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: crossfade,
          props: { prop: "options bgOut prop" },
        },
        in: {
          transition: draw,
          props: { prop: "custom in prop" },
        },
        out: {
          transition: scale,
          props: { prop: "custom global out prop" },
        },
      },
    });
  });

  // todo: move in utils
  // it("options should throw when can't resolve transitions", () => {
  //   const transitions = {
  //     bgIn: {
  //       transition: "piroette",
  //       props: {
  //         prop: "default bgIn prop",
  //       },
  //     },
  //   };

  //   expect(() => {
  //     resolveTransitions(transitions);
  //   }).toThrow("piroette not an existing svelte transition");
  // });
});
