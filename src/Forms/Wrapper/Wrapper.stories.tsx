import type { Meta, StoryObj } from "@storybook/react";

import { FormWrapper } from ".";
import { TextInput } from "../TextInput";

const meta = {
  title: "Forms/Wrapper",
  component: FormWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardFormWrapper: Story = {
  args: {
    children: (
      <>
        <TextInput
          label="Email"
          placeholder="youremail@example.com"
          type="email"
        />
        <TextInput
          label="Password"
          placeholder="************"
          type="password"
        />
      </>
    ),
  },
};
