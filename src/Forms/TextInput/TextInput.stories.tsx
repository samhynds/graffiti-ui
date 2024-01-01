import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./index";

const meta = {
  title: "Forms/Text Input",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputWithoutLabel: Story = {};

export const TextInputWithLabel: Story = {
  args: {
    label: "Username",
  },
};

export const EmailInputWithLabel: Story = {
  args: {
    label: "Email",
    type: "email",
  },
};

export const PasswordInputWithLabel: Story = {
  args: {
    label: "Password",
    type: "password",
  },
};
