import type { Meta, StoryObj } from "@storybook/react";

import { ProfilePic } from ".";

const meta = {
  title: "Media/Profile Picture",
  component: ProfilePic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleProfilePic: Story = {
  args: {
    src: "https://picsum.photos/id/237/128",
    alt: "Profile Picture for Jeff",
    $size: "128px",
  },
};
