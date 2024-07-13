import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { ProfilePic } from ".";

describe("ProfilePic", () => {
  it("renders the profile picture correctly", () => {
    const altText = "Profile Picture for Jeff";
    const { getByRole, getByAltText } = render(
      <ProfilePic
        src="https://picsum.photos/id/237/128"
        alt={altText}
        $size="128px"
      />,
    );

    expect(getByRole("img")).toBeDefined();
    expect(getByAltText(altText)).toBeDefined();
  });
});
