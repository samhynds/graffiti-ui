import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from ".";

const meta = {
  title: "Notification/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardToast: Story = {
  args: {
    title: "You have a new message in your inbox",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut odio sit amet metus semper scelerisque ut fringilla turpis.",
    buttons: [
      {
        text: "Cancel",
        onClick: () => {
          console.log("Cancel");
        },
      },
      {
        text: "Okay",
        isPrimary: true,
        onClick: () => {
          console.log("Okay");
        },
      },
    ],
  },
};

export const JustATitle: Story = {
  args: {
    title: "Something important happened!",
  },
};

export const TitleAndDescription: Story = {
  args: {
    title: "Something important happened!",
    description: "...and here is some more information about it.",
  },
};

export const TitleAndButtons: Story = {
  args: {
    title: "Something important happened!",
    buttons: [
      {
        text: "Cancel",
        onClick: () => {
          console.log("Cancel");
        },
      },
      {
        text: "Okay",
        isPrimary: true,
        onClick: () => {
          console.log("Okay");
        },
      },
    ],
  },
};
