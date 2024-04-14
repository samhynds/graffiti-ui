import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders a toast with just a title", () => {
    const { getByText } = render(<Toast title="Title" />);
    expect(getByText("Title")).toBeDefined();
  });

  it("renders a toast with a title and description", () => {
    const { getByText } = render(
      <Toast title="Title" description="Description" />
    );
    expect(getByText("Title")).toBeDefined();
    expect(getByText("Description")).toBeDefined();
  });

  it("renders a toast with a title, description, and buttons", () => {
    const { getByText } = render(
      <Toast
        title="Title"
        description="Description"
        buttons={[
          {
            text: "Cancel",
            onClick: () => {
              console.log("Cancel");
            },
          },
          {
            text: "Okay",
            isPrimary: true,
            onClick: () => {
              console.log("Okay");
            },
          },
        ]}
      />
    );
    expect(getByText("Title")).toBeDefined();
    expect(getByText("Description")).toBeDefined();
    expect(getByText("Cancel")).toBeDefined();
    expect(getByText("Okay")).toBeDefined();
  });
});
