import type { Meta, StoryObj } from "@storybook/react";

import { Time } from ".";

const meta = {
  title: "Time/Time",
  component: Time,
  tags: ["autodocs"],
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

// 15 minutes ago
const d = new Date(Date.now() - 1000 * 60 * 15);

export const AbsoluteTime: Story = {
  args: {
    date: d,
  },
};

export const RelativeTime: Story = {
  args: {
    date: d,
    relative: true,
  },
};
