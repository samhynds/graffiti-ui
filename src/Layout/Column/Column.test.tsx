import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Column } from ".";

describe("Column", () => {
  it("renders children that are passed to it", () => {
    const { getByText } = render(
      <Column>
        <div>Child 1</div>
        <div>Child 2</div>
      </Column>,
    );

    expect(getByText("Child 1")).toBeDefined();
    expect(getByText("Child 2")).toBeDefined();
  });
});
