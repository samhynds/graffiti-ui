import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";
import { MagicWand, Lightning } from "@phosphor-icons/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    actions: {
      handles: ["click"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $primary: true,
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

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const PrimaryLargeWithIcon: Story = {
  args: {
    ...Primary.args,
    size: "large",
    icon: <MagicWand />,
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const PrimarySmallWithIcon: Story = {
  args: {
    ...Primary.args,
    size: "small",
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

export const SecondaryLarge: Story = {
  args: {
    ...Secondary.args,
    size: "large",
  },
};

export const SecondaryLargeWithIcon: Story = {
  args: {
    ...Secondary.args,
    size: "large",
    icon: <MagicWand />,
  },
};

export const SecondarySmall: Story = {
  args: {
    ...Secondary.args,
    size: "small",
  },
};

export const SecondarySmallWithIcon: Story = {
  args: {
    ...Secondary.args,
    size: "small",
    icon: <MagicWand />,
  },
};

export const WithClickHandler: Story = {
  args: {
    ...Primary.args,
    icon: <Lightning />,
    label: "Click me!",
    onClick: () => {
      console.log("The button has been clicked");
    },
  },
};

export const SquarePrimary: Story = {
  args: {
    $primary: true,
    size: "square",
    icon: <MagicWand />,
    "aria-label": "Abracadabra",
  },
};

export const SquareSecondary: Story = {
  args: {
    $primary: false,
    size: "square",
    icon: <Lightning />,
    "aria-label": "Lightning bolt",
  },
};
