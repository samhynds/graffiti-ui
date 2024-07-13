import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { BrowserRouter } from "react-router-dom";
import { House } from "@phosphor-icons/react";

import { NavigationLink, NavigationLinkProps } from ".";

describe("NavigationLink", () => {
  it.each(["sm", "md", "lg", undefined])(
    "renders the %s size correctly with an icon",
    (size) => {
      const linkText = "Linky Link";
      const linkDestination = "/test/link";
      const { getByRole, getByText } = render(
        <BrowserRouter>
          <NavigationLink
            text={linkText}
            to={linkDestination}
            icon={<House />}
            $linkSize={size as NavigationLinkProps["$linkSize"]}
          />
          ,
        </BrowserRouter>,
      );

      expect(getByRole("link")).toBeDefined();
      expect(getByText(linkText)).toBeDefined();
      expect(getByRole("link").textContent).toEqual(linkText);
    },
  );

  it.each(["sm", "md", "lg", undefined])(
    "renders the %s size correctly without an icon",
    (size) => {
      const linkText = "Linky Link";
      const linkDestination = "/test/link";
      const { getByRole, getByText } = render(
        <BrowserRouter>
          <NavigationLink
            text={linkText}
            to={linkDestination}
            $linkSize={size as NavigationLinkProps["$linkSize"]}
          />
        </BrowserRouter>,
      );

      expect(getByRole("link")).toBeDefined();
      expect(getByText(linkText)).toBeDefined();
      expect(getByRole("link").textContent).toEqual(linkText);
    },
  );
});
