import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./index";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {
    label: "The quick brown fox jumps over the lazy dog",
  },
};
