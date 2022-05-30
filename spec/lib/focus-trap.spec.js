import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import FocusTrapFixture from "spec/__fixtures__/FocusTrapFixture.svelte";

describe("focusTrap", () => {
  const targetTestId = "focus-tarp-fixture__target";

  it("should navigate only in container's targets", async () => {
    const targets = [
      `<button data-testid=${targetTestId}></button>`,
      `<a href="" data-testid=${targetTestId}></a>`,
      `<input data-testid=${targetTestId}></input>`,
    ];
    const { queryAllByTestId } = render(FocusTrapFixture, { props: { targets } });

    const targetsRefs = queryAllByTestId(targetTestId);

    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab();
    expect(targetsRefs[1]).toHaveFocus();
    userEvent.tab();
    expect(targetsRefs[2]).toHaveFocus();
    userEvent.tab();
    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(targetsRefs[2]).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(targetsRefs[1]).toHaveFocus();
  });

  it("should stay on same target if is the only one in container", async () => {
    const targets = [`<button data-testid=${targetTestId}></button>`];
    const { queryAllByTestId } = render(FocusTrapFixture, { props: { targets } });

    const targetsRefs = queryAllByTestId(targetTestId);

    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab();
    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab();
    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(targetsRefs[0]).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(targetsRefs[0]).toHaveFocus();
  });
  it("should stay on container if there are no targets in container", async () => {
    const targets = [];
    const { getByTestId } = render(FocusTrapFixture, { props: { targets } });

    const fixtureContainer = getByTestId("focus-trap-fixture__container");
    const fixtureButton = getByTestId("focus-trap-fixture__button");

    expect(fixtureContainer).toHaveFocus();
    expect(fixtureButton).not.toHaveFocus();
    userEvent.tab();
    expect(fixtureContainer).toHaveFocus();
    expect(fixtureButton).not.toHaveFocus();
    userEvent.tab();
    expect(fixtureContainer).toHaveFocus();
    expect(fixtureButton).not.toHaveFocus();
    userEvent.tab({ shift: true });
    expect(fixtureContainer).toHaveFocus();
    expect(fixtureButton).not.toHaveFocus();
    userEvent.tab({ shift: true });
  });
});
