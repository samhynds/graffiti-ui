import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Label } from ".";

describe("Label", () => {
  it("renders the label content correctly", () => {
    const labelContent = "Username";
    const { getByLabelText } = render(
      <Label>
        {labelContent}
        {/* Need an input here, otherwise the tests fail because they require a label to be associated with a form control.  */}
        <input type="text" />
      </Label>
    );

    expect(getByLabelText(labelContent)).toBeDefined();
  });
});
