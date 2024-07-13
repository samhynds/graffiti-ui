import { expect, describe, it, vi } from "vitest";
import { render } from "../../../test/utils";

import { IconButton } from ".";
import { Heart } from "@phosphor-icons/react";

describe("Button", () => {
  it("handles click events", async () => {
    const logLine = "Logged after clicking the button!";
    const spiedConsole = vi.spyOn(console, "log");

    const { getByRole } = render(
      <IconButton icon={<Heart />} onClick={() => console.log(logLine)} />,
    );

    const button = getByRole("button");
    await button.click();

    await expect(spiedConsole).toHaveBeenCalledWith(logLine);
  });
});
