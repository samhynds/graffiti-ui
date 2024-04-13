import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";
import { Card } from "./Card";

describe("Card", () => {
  it("renders content", () => {
    const cardContent = (
      <>
        <h1>Heading 1</h1>
        <p>Paragraph</p>
      </>
    );
    const { getByRole, getByText } = render(<Card>{cardContent}</Card>);
    const headingElement = getByRole("heading", { level: 1 });
    const paragraphElement = getByText("Paragraph");

    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 1");

    expect(paragraphElement).toBeDefined();
    expect(paragraphElement.textContent).toBe("Paragraph");
  });
});
