import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { Dropdown } from ".";

const defaultProps = {
  label: "What is your favourite fruit?",
  items: [
    { label: "Orange", value: "orange" },
    { label: "Banana", value: "banana" },
    { label: "Apple", value: "apple" },
    { label: "Grapefruit", value: "grapefruit" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Grapes", value: "grapes" },
  ],
};

describe("Dropdown", () => {
  it("renders the dropdown correctly", () => {
    const { getByTestId } = render(<Dropdown {...defaultProps}></Dropdown>);
    const dropdownElement = getByTestId("dropdown");

    console.log(dropdownElement.textContent);

    expect(dropdownElement).toBeDefined();
    expect(dropdownElement.textContent).toContain(defaultProps.label);

    defaultProps.items.forEach((item) => {
      expect(dropdownElement.textContent).toContain(item.label);
    });
  });

  // it("shows the items in the dropdown when the dropdown is clicked", () => {
  //   const { getByRole } = render(<Dropdown></Dropdown>);
  // });

  // it("shows the items in the dropdown when the label is clicked", () => {
  //   const { getByRole } = render(<Dropdown></Dropdown>);
  // });
});
