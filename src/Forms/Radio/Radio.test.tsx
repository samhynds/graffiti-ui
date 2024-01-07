import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Radio } from ".";

describe("Radio", () => {
  it("renders with a label", () => {
    const labelText = "This is a label";
    const { getByRole, getByLabelText } = render(<Radio label={labelText} />);

    const labelElement = getByLabelText(labelText);
    const inputElement = getByRole("radio");

    expect(labelElement).toBeDefined();
    expect(inputElement).toBeDefined();
  });
});
