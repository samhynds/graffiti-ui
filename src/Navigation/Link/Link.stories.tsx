import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { House } from "@phosphor-icons/react";

import { NavigationLink } from ".";

const meta = {
  title: "Navigation/Link",
  component: NavigationLink,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkWithIcon: Story = {
  args: {
    text: "Home",
    $linkSize: "md",
    to: "#",
    icon: <House />,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const LinkNoIcon: Story = {
  args: {
    text: "Browse",
    $linkSize: "md",
    to: "#",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
