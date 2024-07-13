import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { BrowserRouter } from "react-router-dom";
import { House } from "@phosphor-icons/react";

import { NavigationVertical, NavigationVerticalProps } from ".";

const links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Explore",
    to: "/explore",
  },
  {
    text: "Notifications",
    to: "/notifications",
  },
  {
    text: "Messages",
    to: "/messages",
  },
  {
    text: "Bookmarks",
    to: "/bookmarks",
  },
  {
    text: "Profile",
    to: "/profile",
  },
  {
    text: "Settings",
    to: "/settings",
  },
  {
    text: "More",
    to: "/more",
  },
];

const linksWithIcons = links.map((link) => ({
  ...link,
  icon: <House />,
}));

describe("NavigationVertical", () => {
  it.each(["sm", "md", "lg", undefined])(
    "renders the %s size correctly without an icon",
    (size) => {
      const { getAllByRole, getByText } = render(
        <BrowserRouter>
          <NavigationVertical
            links={links}
            $linkSize={size as NavigationVerticalProps["$linkSize"]}
          />
        </BrowserRouter>,
      );

      expect(getAllByRole("link").length).toEqual(links.length);

      links.forEach((link) => {
        expect(getByText(link.text)).toBeDefined();
      });
    },
  );

  it.each(["sm", "md", "lg", undefined])(
    "renders the %s size correctly with an icon",
    (size) => {
      const { getAllByRole, getByText } = render(
        <BrowserRouter>
          <NavigationVertical
            links={linksWithIcons}
            $linkSize={size as NavigationVerticalProps["$linkSize"]}
          />
        </BrowserRouter>,
      );

      expect(getAllByRole("link").length).toEqual(links.length);

      links.forEach((link) => {
        expect(getByText(link.text)).toBeDefined();
      });
    },
  );
});
