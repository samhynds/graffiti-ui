// loading spinner stories
import type { Meta, StoryObj } from "@storybook/react";

import { LoadingSpinner } from ".";

const meta = {
  title: "Loading/Spinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleLoadingSpinner: Story = {};
