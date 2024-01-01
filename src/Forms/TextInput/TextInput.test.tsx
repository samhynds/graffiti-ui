import { expect, describe, it, vi } from "vitest";
import { render, fireEvent } from "../../../test/utils";

import { TextInput } from ".";

describe("TextInput", () => {
  it("renders without a label", () => {
    const { getByRole } = render(<TextInput />);

    expect(getByRole("textbox")).toBeDefined();
  });

  it("renders with a label", () => {
    const labelText = "This is a label";
    const { getByRole, getByLabelText } = render(
      <TextInput label={labelText} />
    );

    const labelElement = getByLabelText(labelText);
    const inputElement = getByRole("textbox");

    expect(labelElement).toBeDefined();
    expect(inputElement).toBeDefined();
  });
});
