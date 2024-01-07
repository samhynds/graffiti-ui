import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { RadioGroup } from ".";

describe("Radio Group", () => {
  it("renders a list of radio buttons with correct labels with a legend", () => {
    const radioGroupProps = {
      label: "What is your favourite colour?",
      items: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
      groupName: "colors",
    };

    const { getByRole, getByLabelText, getByText } = render(
      <RadioGroup {...radioGroupProps} />
    );

    const fieldsetElement = getByRole("group");
    const legendElement = getByText(radioGroupProps.label);

    expect(fieldsetElement).toBeDefined();
    expect(legendElement).toBeDefined();
    radioGroupProps.items.forEach((radioItemText) => {
      const radioLabelWrapper = getByLabelText(radioItemText);
      expect(radioLabelWrapper).toBeDefined();
    });
  });

  it("renders a list of radio buttons with correct labels without a legend", () => {
    const radioGroupProps = {
      items: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
      groupName: "colors",
    };

    const { getByRole, getByLabelText } = render(
      <RadioGroup {...radioGroupProps} />
    );

    const fieldsetElement = getByRole("group");

    expect(fieldsetElement).toBeDefined();
    radioGroupProps.items.forEach((radioItemText) => {
      const radioLabelWrapper = getByLabelText(radioItemText);
      expect(radioLabelWrapper).toBeDefined();
    });
  });
});
