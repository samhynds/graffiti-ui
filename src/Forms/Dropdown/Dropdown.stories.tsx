import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./index";

const meta = {
  title: "Forms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLabel: Story = {
  args: {
    label: "What is your favourite fruit?",
    items: [
      { label: "Orange", value: "orange" },
      { label: "Banana", value: "banana" },
      { label: "Apple", value: "apple" },
      { label: "Grapefruit", value: "grapefruit" },
      { label: "Pineapple", value: "pineapple" },
      { label: "Grapes", value: "grapes" },
    ],
  },
};
