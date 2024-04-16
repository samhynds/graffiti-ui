import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from ".";

import { FormWrapper } from "../Forms/Wrapper";
import { TextInput } from "../Forms/TextInput";

const meta = {
  title: "Modal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardModal: Story = {
  args: {
    title: "Log in",
    subtitle: "To continue, please log in.",
    buttons: [
      {
        text: "Log In",
        isPrimary: true,
        onClick: () => {
          console.log("Log In");
        },
      },
    ],
    children: (
      <FormWrapper>
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
      </FormWrapper>
    ),
  },
};
