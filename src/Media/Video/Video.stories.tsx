import type { Meta, StoryObj } from "@storybook/react";

import { Video } from ".";

const meta = {
  title: "Media/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleVideo: Story = {
  args: {
    sources: [
      {
        src: "/graffiti-ui/storybook/aurora.mp4",
        type: "video/mp4",
      },
    ],
    $width: "640px",
    $height: "360px",
  },
};
