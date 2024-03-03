import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Heading } from ".";

describe("Heading", () => {
  it("renders an h1 tag with correct content for $level 1", () => {
    const { getByRole } = render(<Heading $level={1}>Heading 1</Heading>);
    const headingElement = getByRole("heading", { level: 1 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 1");
  });

  it("renders an h2 tag with correct content for $level 2", () => {
    const { getByRole } = render(<Heading $level={2}>Heading 2</Heading>);
    const headingElement = getByRole("heading", { level: 2 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 2");
  });

  it("renders an h3 tag with correct content for $level 3", () => {
    const { getByRole } = render(<Heading $level={3}>Heading 3</Heading>);
    const headingElement = getByRole("heading", { level: 3 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 3");
  });

  it("renders an h4 tag with correct content for $level 4", () => {
    const { getByRole } = render(<Heading $level={4}>Heading 4</Heading>);
    const headingElement = getByRole("heading", { level: 4 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 4");
  });

  it("renders an h5 tag with correct content for $level 5", () => {
    const { getByRole } = render(<Heading $level={5}>Heading 5</Heading>);
    const headingElement = getByRole("heading", { level: 5 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 5");
  });

  it("renders an h6 tag with correct content for $level 6", () => {
    const { getByRole } = render(<Heading $level={6}>Heading 6</Heading>);
    const headingElement = getByRole("heading", { level: 6 });
    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 6");
  });
});
