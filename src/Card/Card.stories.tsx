import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";

const meta = {
  title: "Card/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardCard: Story = {
  args: {
    children: (
      <>
        <Heading $level={3}>Card Title</Heading>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            convallis sed libero vitae rutrum. Vivamus porta, ipsum pellentesque
            commodo gravida, risus elit efficitur tortor, at laoreet lacus diam
            vitae risus. Donec id erat aliquam, bibendum justo sed, faucibus
            risus. Sed ornare congue eros facilisis lacinia. Etiam eu nisi id
            nisi ornare mattis eget in urna. Phasellus non feugiat lacus, quis
            egestas enim. Suspendisse vestibulum ante sapien, et volutpat erat
            fringilla et.
          </p>

          <p>
            Maecenas quis tellus ut urna mattis pharetra sed sit amet magna.
            Quisque a mauris a elit maximus aliquam. Cras ac mollis risus. Duis
            nec nisi erat. Donec quis orci massa. Morbi in ipsum nec diam
            facilisis malesuada. Aliquam velit leo, hendrerit vitae consectetur
            sit amet, cursus in quam. Quisque dolor nisl, fringilla eget eros
            ut, sodales hendrerit turpis. Etiam tempor placerat erat ut semper.
          </p>
        </Text>
      </>
    ),
  },
};
