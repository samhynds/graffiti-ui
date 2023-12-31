import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";
import { MagicWand, Lightning } from "@phosphor-icons/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Action",
    size: "medium",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    ...Primary.args,
    icon: <MagicWand />,
  },
};

export const Secondary: Story = {
  args: {
    label: "A Secondary Button",
    size: "medium",
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    ...Secondary.args,
    icon: <Lightning />,
  },
};

export const WithOnClickFunction: Story = {
  args: {
    ...Primary.args,
    icon: <Lightning />,
    label: "Click me!",
    onClick: () => {
      console.log("The button has been clicked");
    },
  },
};
