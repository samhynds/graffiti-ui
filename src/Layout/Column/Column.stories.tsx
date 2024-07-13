import type { Meta, StoryObj } from "@storybook/react";

import { Column } from ".";

import { Container } from "../Container";
import { Table } from "../../Table";
import { Heading } from "../../Typography/Heading";
import { Text } from "../../Typography/Text";

const tableData = {
  headings: ["Make", "Model", "HP", "Displacement (cc)", "Year"],
  rows: [
    ["Mazda", "RX-7 Type R", 252, 1308, 1992],
    ["Mercedes", "190 E Evo II", 232, 2463, 1990],
    ["Jaguar", "XJ220", 542, 3498, 1993],
    ["Dodge", "Viper", 400, 7990, 1991],
    ["Honda", "NSX R", 290, 3179, 1992],
  ],
};

const meta = {
  title: "Layout/Column",
  component: Column,
  tags: ["autodocs"],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColumnWithContent: Story = {
  args: {
    children: (
      <>
        <Heading $level={2}>Some content inside a column</Heading>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            finibus sem, sed imperdiet nibh. Duis nec lorem ipsum. Nulla
            sagittis mi at libero pretium volutpat. Nam interdum quis urna quis
            cursus. Praesent id purus sed lectus finibus dignissim vel et ex.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Quisque varius congue tellus ut tempus.
            Aliquam erat volutpat. Etiam sed dui maximus, pretium nulla sed,
            sagittis nunc. Duis nec massa nibh. In maximus, nisl vitae imperdiet
            faucibus, ante orci porta urna, quis scelerisque arcu mi sit amet
            turpis.
          </p>
          <p>
            Cras vel neque libero. In semper, magna ac egestas viverra, nunc
            arcu finibus nulla, id finibus magna mi ac odio. Nunc vitae neque
            vel lorem varius laoreet. Ut sagittis pretium dui at ornare. Fusce
            felis lorem, mattis a ullamcorper maximus, egestas in sapien.
            Vivamus at suscipit nisl. Phasellus venenatis feugiat congue.
            Vestibulum tempor, dolor sit amet posuere fermentum, turpis tortor
            lacinia augue, vitae mattis justo arcu nec elit.
          </p>
        </Text>
        <Table data={tableData} />
        <Text>
          <p>
            Vivamus porta in ligula vitae molestie. Vestibulum in libero in arcu
            pharetra aliquet vitae ac urna. Nunc aliquet cursus diam, sagittis
            congue elit aliquam quis. Aliquam porta, mauris a accumsan posuere,
            metus neque vehicula nisl, eu luctus quam nisi id velit. Fusce
            fermentum risus dictum, ultrices purus nec, auctor dolor. In massa
            ante, mattis vel lacus id, posuere tincidunt leo. Nullam ornare in
            libero eu egestas. Aenean sit amet imperdiet lorem, a porttitor
            magna.{" "}
          </p>
        </Text>
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
