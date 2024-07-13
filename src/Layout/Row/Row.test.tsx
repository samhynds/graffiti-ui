import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Row } from ".";

describe("Row", () => {
  it("renders children that are passed to it", () => {
    const { getByText } = render(
      <Row>
        <div>Child 1</div>
        <div>Child 2</div>
      </Row>,
    );

    expect(getByText("Child 1")).toBeDefined();
    expect(getByText("Child 2")).toBeDefined();
  });
});
