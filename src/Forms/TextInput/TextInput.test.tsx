import { expect, describe, it, vi } from "vitest";
import { render } from "../../../test/utils";

import { TextInput } from ".";

describe("TextInput", () => {
  it("renders without a label", () => {
    const { getByRole } = render(<TextInput />);

    expect(getByRole("textbox")).toBeDefined();
  });

  it("renders with a label", () => {
    const { getByRole } = render(<TextInput />);

    // expect(getByRole("textbox").textContent).toEqual(buttonLabel);
  });

  it("focuses the input when the label is clicked", () => {
    const { getByRole } = render(<TextInput />);

    // expect(getByRole("textbox").textContent).toEqual(buttonLabel);
  });
});
