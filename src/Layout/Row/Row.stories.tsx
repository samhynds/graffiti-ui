import type { Meta, StoryObj } from "@storybook/react";

import { Row } from ".";

import { Container } from "../Container";
import { Text } from "../../Typography/Text";

const meta = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowWithContent: Story = {
  args: {
    children: (
      <>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Duis nec lorem ipsum. Nulla sagittis mi at libero volutpat.</Text>
        <Text>Cras vel neque libero.</Text>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Container $width="800px" $alignment="center" $flexDirection="row">
        <Story />
      </Container>
    ),
  ],
};
