import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from ".";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    children: "Heading Level 1",
    $level: 1,
  },
};

export const Level2: Story = {
  args: {
    children: "Heading Level 2",
    $level: 2,
  },
};

export const Level3: Story = {
  args: {
    children: "Heading Level 3",
    $level: 3,
  },
};

export const Level4: Story = {
  args: {
    children: "Heading Level 4",
    $level: 4,
  },
};

export const Level5: Story = {
  args: {
    children: "Heading Level 5",
    $level: 5,
  },
};

export const Level6: Story = {
  args: {
    children: "Heading Level 6",
    $level: 6,
  },
};
