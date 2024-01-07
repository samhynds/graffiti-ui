import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./index";

const meta = {
  title: "Text/Tag",
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

export const TagInText: Story = {
  args: {
    label: "inside a tag!",
    $color: "pink",
  },
  decorators: [
    (Story) => (
      <>
        This is some text outside of a tag and <Story /> Also here is some text
        after the tag.
      </>
    ),
  ],
};
