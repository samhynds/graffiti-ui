import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./index";

const meta = {
  title: "Forms/Radio Group",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroupWithLabel: Story = {
  args: {
    label: "What is your favourite colour?",
    items: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    groupName: "colors",
  },
};

export const RadioGroupWithoutLabel: Story = {
  args: {
    items: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    groupName: "colors2",
  },
};
