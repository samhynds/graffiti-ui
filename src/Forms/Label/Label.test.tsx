import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Label } from ".";

describe("Label", () => {
  it("renders the label content correctly", () => {
    const labelContent = "Username";
    const { getByLabelText } = render(<Label>{labelContent}</Label>);

    expect(getByLabelText(labelContent)).toBeDefined();
  });
});
