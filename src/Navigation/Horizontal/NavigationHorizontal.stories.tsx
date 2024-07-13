import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import {
  House,
  MagnifyingGlass,
  Bell,
  EnvelopeSimple,
  BookmarksSimple,
  User,
  GearSix,
  DotsThreeOutline,
} from "@phosphor-icons/react";

import { NavigationHorizontal } from ".";

const meta = {
  title: "Navigation/Horizontal",
  component: NavigationHorizontal,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalNavigation: Story = {
  args: {
    $linkSize: "md",
    links: [
      {
        icon: <House />,
        text: "Home",
        to: "/",
      },
      {
        icon: <MagnifyingGlass />,
        text: "Explore",
        to: "/explore",
      },
      {
        icon: <Bell />,
        text: "Notifications",
        to: "/notifications",
      },
      {
        icon: <EnvelopeSimple />,
        text: "Messages",
        to: "/messages",
      },
      {
        icon: <BookmarksSimple />,
        text: "Bookmarks",
        to: "/bookmarks",
      },
      {
        icon: <User />,
        text: "Profile",
        to: "/profile",
      },
      {
        icon: <GearSix />,
        text: "Settings",
        to: "/settings",
      },
      {
        icon: <DotsThreeOutline />,
        text: "More",
        to: "/more",
      },
    ],
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
