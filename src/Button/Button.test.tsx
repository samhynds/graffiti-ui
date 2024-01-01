import { expect, describe, it, vi } from "vitest";
import { render } from "../../test/utils";

import { Button } from ".";

describe("Button", () => {
  it("renders the primary variant correctly when provided with primary and label props", () => {
    const buttonLabel = "Button Text";
    const { getByRole } = render(
      <Button $primary={true} label={buttonLabel} />
    );

    expect(getByRole("button").textContent).toEqual(buttonLabel);
  });

  it("handles click events", async () => {
    const logLine = "Logged after clicking the button!";
    const spiedConsole = vi.spyOn(console, "log");

    const { getByRole } = render(
      <Button
        label="Click me!"
        onClick={() => {
          console.log(logLine);
        }}
      />
    );

    const button = getByRole("button");
    await button.click();

    await expect(spiedConsole).toHaveBeenCalledWith(logLine);
  });
});
