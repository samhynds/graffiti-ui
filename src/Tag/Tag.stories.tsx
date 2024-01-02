import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./index";

const meta = {
  title: "Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $color: {
      control: "select",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardTag: Story = {
  args: {
    label: "Hello, this is a tag",
    $color: "aqua",
  },
};
