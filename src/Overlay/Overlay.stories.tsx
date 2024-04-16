import type { Meta, StoryObj } from "@storybook/react";

import { Overlay } from ".";

const meta = {
  title: "Misc/Overlay",
  component: Overlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
          eros velit, at gravida leo dictum eu. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Maecenas at sem
          eu ipsum euismod dictum non vitae felis. Maecenas scelerisque sem
          vitae massa lacinia sagittis. Donec ultrices vitae velit vitae
          interdum. Integer et libero mattis, convallis neque vitae,
          sollicitudin risus. Proin vel tincidunt nisi. Proin auctor dui
          eleifend tempor pharetra. Integer rutrum nunc ut feugiat euismod.
        </p>
        <img src="http://placekitten.com/200/300" alt="kitten" />
      </>
    ),
  ],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightOverlay: Story = {
  args: {
    $color: "light",
  },
};

export const DarkOverlay: Story = {
  args: {
    $color: "dark",
  },
};
