import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";

import { Tag } from ".";

describe("Tag", () => {
  it("renders the tag correctly", () => {
    const tagContent = "Hello this is a tag";
    const { getByText } = render(<Tag label={tagContent} $color="cyan" />);

    expect(getByText(tagContent)).toBeDefined();
  });
});
