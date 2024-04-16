import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";
import { Overlay } from "./Overlay";

describe("Overlay", () => {
  it("renders an overlay when no color is specified", () => {
    const { getByTestId } = render(<Overlay />);
    expect(getByTestId("overlay")).toBeDefined();
  });

  it("renders an overlay with a light background", () => {
    const { getByTestId } = render(<Overlay $color="light" />);
    expect(getByTestId("overlay")).toBeDefined();
  });

  it("renders an overlay with a dark background", () => {
    const { getByTestId } = render(<Overlay $color="dark" />);
    expect(getByTestId("overlay")).toBeDefined();
  });
});
