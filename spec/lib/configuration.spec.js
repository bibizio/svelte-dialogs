import { config, getOpts } from "src/lib/configuration";

config({
  global: {
    text: "custom global title",
    transitions: {
      out: {
        transition: "custom global out",
        props: { prop: "custom global out prop" },
      },
    },
  },
});

const custom = {
  overlayClass: "custom overlay class",
  transitions: {
    in: {
      transition: "custom in",
      props: { prop: "custom in prop" },
    },
  },
};

const options = {
  dialogClass: "options dialog class",
  transitions: {
    bgOut: {
      transition: "options bgOut",
      props: { prop: "options bgOut prop" },
    },
  },
};

const defaults = {
  title: "default title",
  text: "default title",
  overlayClass: "default overlay class",
  dialogClass: "default dialog class",
  transitions: {
    bgIn: {
      transition: "default bgIn",
      props: {
        prop: "default bgIn prop",
      },
    },
    bgOut: {
      transition: "default bgOut",
      props: { prop: "default bgOut prop" },
    },
    in: {
      transition: "default in",
      props: { prop: "default in prop" },
    },
    out: {
      transition: "default out",
      props: { prop: "default out prop" },
    },
  },
};

describe("configuration", () => {
  it("custom global should overwrite defaults", () => {
    const opts = getOpts(defaults, {}, {});
    expect(opts).toStrictEqual({
      title: "default title",
      text: "custom global title",
      overlayClass: "default overlay class",
      dialogClass: "default dialog class",
      transitions: {
        bgIn: {
          transition: "default bgIn",
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: "default bgOut",
          props: { prop: "default bgOut prop" },
        },
        in: {
          transition: "default in",
          props: { prop: "default in prop" },
        },
        out: {
          transition: "custom global out",
          props: { prop: "custom global out prop" },
        },
      },
    });
  });

  it("custom should overwrite custom global", () => {
    const opts = getOpts(defaults, custom, {});
    expect(opts).toStrictEqual({
      title: "default title",
      text: "custom global title",
      overlayClass: "custom overlay class",
      dialogClass: "default dialog class",
      transitions: {
        bgIn: {
          transition: "default bgIn",
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: "default bgOut",
          props: { prop: "default bgOut prop" },
        },
        in: {
          transition: "custom in",
          props: { prop: "custom in prop" },
        },
        out: {
          transition: "custom global out",
          props: { prop: "custom global out prop" },
        },
      },
    });
  });

  it("options should overwrite custom", () => {
    const opts = getOpts(defaults, custom, options);
    expect(opts).toStrictEqual({
      title: "default title",
      text: "custom global title",
      overlayClass: "custom overlay class",
      dialogClass: "options dialog class",
      transitions: {
        bgIn: {
          transition: "default bgIn",
          props: {
            prop: "default bgIn prop",
          },
        },
        bgOut: {
          transition: "options bgOut",
          props: { prop: "options bgOut prop" },
        },
        in: {
          transition: "custom in",
          props: { prop: "custom in prop" },
        },
        out: {
          transition: "custom global out",
          props: { prop: "custom global out prop" },
        },
      },
    });
  });
});
