import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./index";

const meta = {
  title: "Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLabel: Story = {
  render: () => <Label>Username</Label>,
};
