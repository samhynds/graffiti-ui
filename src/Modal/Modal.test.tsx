import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";
import { Modal } from ".";

describe("Modal", () => {
  const modalText = "Hello from the Modal";
  const modalContent = <p>{modalText}</p>;

  it("renders a modal with just children", () => {
    const { getByText } = render(<Modal>{modalContent}</Modal>);

    expect(getByText(modalText)).toBeDefined();
  });

  it("renders a modal with a title and children", () => {
    const { getByText } = render(<Modal title="Title">{modalContent}</Modal>);
    expect(getByText("Title")).toBeDefined();
    expect(getByText(modalText)).toBeDefined();
  });

  it("renders a modal with a title, subtitle, and children", () => {
    const { getByText } = render(
      <Modal title="Title" subtitle="subtitle text">
        {modalContent}
      </Modal>
    );
    expect(getByText("Title")).toBeDefined();
    expect(getByText("subtitle text")).toBeDefined();
    expect(getByText(modalText)).toBeDefined();
  });

  it("renders a modal with a title, subtitle, buttons, and children", () => {
    const { getByText } = render(
      <Modal
        title="Title"
        subtitle="subtitle text"
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
      >
        {modalContent}
      </Modal>
    );
    expect(getByText("Title")).toBeDefined();
    expect(getByText("subtitle text")).toBeDefined();
    expect(getByText("Cancel")).toBeDefined();
    expect(getByText("Okay")).toBeDefined();
    expect(getByText(modalText)).toBeDefined();
  });
});
