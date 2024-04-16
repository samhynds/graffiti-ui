import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { FormWrapper } from ".";

describe("Form Wrapper", () => {
  it("renders without error", () => {
    const formContent = "Hello!";
    const { getByTestId, getByText } = render(
      <FormWrapper>
        <div>{formContent}</div>
      </FormWrapper>
    );

    expect(getByTestId("form-wrapper")).toBeDefined();
    expect(getByText(formContent)).toBeDefined();
  });
});
