import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Checkbox } from ".";

describe("Checkbox", () => {
  it("renders with a label", () => {
    const labelText = "This is a label";
    const { getByRole, getByLabelText } = render(
      <Checkbox label={labelText} />
    );

    const labelElement = getByLabelText(labelText);
    const inputElement = getByRole("checkbox");

    expect(labelElement).toBeDefined();
    expect(inputElement).toBeDefined();
  });
});
