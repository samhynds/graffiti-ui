import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { Container } from "./Container";

describe("Container", () => {
  it("renders content", () => {
    const containerContent = (
      <>
        <h1>Heading 1</h1>
        <p>Paragraph</p>
      </>
    );
    const { getByRole, getByText } = render(
      <Container $alignment="center" $flexDirection="row" $width="1200px">
        {containerContent}
      </Container>
    );
    const headingElement = getByRole("heading", { level: 1 });
    const paragraphElement = getByText("Paragraph");

    expect(headingElement).toBeDefined();
    expect(headingElement.textContent).toBe("Heading 1");

    expect(paragraphElement).toBeDefined();
    expect(paragraphElement.textContent).toBe("Paragraph");
  });
});
