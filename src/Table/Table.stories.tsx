import type { Meta, StoryObj } from "@storybook/react";

import { Table } from ".";

const meta = {
  title: "Table/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardTable: Story = {
  args: {
    data: {
      headings: ["Make", "Model", "HP", "Displacement (cc)", "Year"],
      rows: [
        ["Mazda", "RX-7 Type R", 252, 1308, 1992],
        ["Mercedes", "190 E Evo II", 232, 2463, 1990],
        ["Jaguar", "XJ220", 542, 3498, 1993],
        ["Dodge", "Viper", 400, 7990, 1991],
        ["Honda", "NSX R", 290, 3179, 1992],
      ],
    },
  },
};
