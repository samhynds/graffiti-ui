import type { Meta, StoryObj } from "@storybook/react";
import { Heart } from "@phosphor-icons/react";

import { IconButton } from ".";

const meta = {
  title: "Buttons/Icon",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleIconButton: Story = {
  args: {
    icon: <Heart />,
    $size: "1rem",
    onClick: () => alert("Clicked"),
  },
};
