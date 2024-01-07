import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./index";

const meta = {
  title: "Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadio: Story = {
  args: {
    label: "The quick brown fox jumps over the lazy dog",
  },
};
