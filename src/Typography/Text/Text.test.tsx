import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { Text } from "./Text";

describe("Text component", () => {
  it("renders the text content", () => {
    const textContent = "Hello, world!";
    const { getByText } = render(<Text>{textContent}</Text>);
    const textElement = getByText(textContent);
    expect(textElement).toBeDefined();
  });

  it("renders a child element", () => {
    const imageUrl = "https://example.com/image.jpg";
    const altText = "Example Image";
    const { container } = render(
      <Text>
        <img src={imageUrl} alt={altText} />
      </Text>
    );
    const imgElement = container.querySelector("img");
    expect(imgElement).toBeDefined();
    expect(imgElement?.src).toEqual(imageUrl);
    expect(imgElement?.alt).toEqual(altText);
  });

  it("renders child elements and text content", () => {
    const textContent = "Hello, world!";
    const imageUrl = "https://example.com/image.jpg";
    const altText = "Example Image";

    const { container, getByText } = render(
      <Text>
        {textContent}
        <img src={imageUrl} alt={altText} />
      </Text>
    );

    const imgElement = container.querySelector("img");
    expect(imgElement).toBeDefined();
    expect(imgElement?.src).toEqual(imageUrl);
    expect(imgElement?.alt).toEqual(altText);

    const textElement = getByText(textContent);
    expect(textElement).toBeDefined();
  });
});
