import { expect, describe, it } from "vitest";
import { render, act } from "../../../test/utils";

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
    const { getByTestId, getByRole } = render(
      <Dropdown {...defaultProps}></Dropdown>
    );
    const dropdownElement = getByTestId("dropdown");
    const buttonElement = getByRole("button");

    expect(dropdownElement).toBeDefined();
    expect(dropdownElement.textContent).toContain(defaultProps.label);

    expect(buttonElement.textContent).toEqual(defaultProps.items[0].label);

    defaultProps.items.forEach((item) => {
      expect(dropdownElement.textContent).toContain(item.label);
    });
  });

  it("changes the button text when an item is selected", () => {
    const { getByRole, getByLabelText } = render(
      <Dropdown {...defaultProps}></Dropdown>
    );

    const itemToSelect = defaultProps.items[4];

    const buttonElement = getByRole("button");
    const elementToSelect = getByLabelText(itemToSelect.label);

    act(() => {
      buttonElement.click();
      elementToSelect.click();
    });

    expect(buttonElement.textContent).toEqual(itemToSelect.label);
  });
});
