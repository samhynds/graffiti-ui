import type { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";

const meta = {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JustText: Story = {
  args: {
    children:
      "Nulla mattis vel nisl eget porttitor. Fusce eget elit quis nisl blandit sagittis. Fusce nisi ligula, molestie et elit non, aliquet suscipit velit. Phasellus imperdiet neque vitae lorem condimentum, ut porta enim facilisis. Quisque eu arcu quis elit interdum auctor nec id justo. Nulla sollicitudin augue libero, eget luctus dolor eleifend nec. Cras aliquam euismod nisl in egestas. Donec in lorem malesuada, rutrum est ut, vulputate ligula. Donec hendrerit, dolor vel tempus pulvinar, magna ligula volutpat velit, nec hendrerit est lectus ac risus.",
  },
};

export const MultipleParagraphs: Story = {
  args: {
    children: (
      <>
        <p>
          Fusce euismod nibh eu lectus sagittis, eu aliquam est bibendum. Donec
          quis ante sed turpis fermentum tempus. Praesent nibh odio, posuere id
          consequat in, egestas at enim. Vivamus magna massa, dictum ut lectus
          et, interdum dapibus ante. Cras non risus commodo mi placerat mattis.
          In finibus bibendum consequat. Morbi rutrum eros sit amet dui dapibus,
          at luctus ipsum dictum.
        </p>
        <p>
          Nulla mattis vel nisl eget porttitor. Fusce eget elit quis nisl
          blandit sagittis. Fusce nisi ligula, molestie et elit non, aliquet
          suscipit velit. Phasellus imperdiet neque vitae lorem condimentum, ut
          porta enim facilisis. Quisque eu arcu quis elit interdum auctor nec id
          justo. Nulla sollicitudin augue libero, eget luctus dolor eleifend
          nec. Cras aliquam euismod nisl in egestas. Donec in lorem malesuada,
          rutrum est ut, vulputate ligula. Donec hendrerit, dolor vel tempus
          pulvinar, magna ligula volutpat velit, nec hendrerit est lectus ac
          risus. Nunc pharetra odio sit amet dui egestas, at molestie ligula
          pharetra. Aliquam ac velit efficitur ex sollicitudin efficitur. Sed
          maximus, mauris iaculis cursus rutrum, velit arcu varius metus, non
          tincidunt neque dui nec enim.
        </p>
        <p>
          Ut dictum lorem nibh. Duis lectus elit, vehicula dignissim tempus a,
          interdum sed nunc. Fusce vehicula pretium arcu. Phasellus molestie
          elit massa, at molestie est mattis sit amet. Nullam massa magna,
          commodo quis quam sed, dignissim maximus nibh. Aliquam consequat erat
          tincidunt ligula pellentesque, sed sagittis orci rhoncus. Praesent
          diam lorem, semper a velit vel, tempor interdum elit.
        </p>
      </>
    ),
  },
};

export const WithListsAndLinks: Story = {
  args: {
    children: (
      <>
        <p>
          Fusce euismod nibh eu lectus sagittis,{" "}
          <a href="#">eu aliquam est bibendum</a>. Donec quis ante sed turpis
          fermentum tempus. Praesent nibh odio, posuere id consequat in, egestas
          at enim. Vivamus magna massa, dictum ut lectus et, interdum dapibus
          ante. Cras non risus commodo mi placerat mattis. In finibus bibendum
          consequat. Morbi rutrum eros sit amet dui dapibus, at luctus ipsum
          dictum.
        </p>
        <p>
          Nulla mattis vel nisl eget porttitor. Fusce eget elit quis nisl
          blandit sagittis.
          <ol>
            <li>Sed lacinia interdum magna, eu ultricies nibh auctor at.</li>
            <li>Mauris sit amet rhoncus sapien.</li>
            <li>Vivamus quis dignissim elit, et condimentum diam.</li>
            <li>Nullam ac massa eget tortor eleifend tempor.</li>
          </ol>
          Aliquam ac velit efficitur ex sollicitudin efficitur. Sed maximus,
          mauris iaculis cursus rutrum, velit arcu varius metus, non tincidunt
          neque dui nec enim.
        </p>
        <p>
          Ut dictum lorem nibh. Duis lectus elit, vehicula dignissim tempus a,
          interdum sed nunc. Fusce vehicula pretium arcu. Phasellus molestie
          elit massa, at molestie est mattis sit amet.
          <ul>
            <li>Sed lacinia interdum magna, eu ultricies nibh auctor at.</li>
            <li>Mauris sit amet rhoncus sapien.</li>
            <li>Vivamus quis dignissim elit, et condimentum diam.</li>
            <li>Nullam ac massa eget tortor eleifend tempor.</li>
          </ul>
          Nullam massa magna, commodo quis quam sed, dignissim maximus nibh.
          Aliquam consequat erat tincidunt ligula pellentesque, sed sagittis
          orci rhoncus. Praesent diam lorem, semper a velit vel, tempor interdum
          elit.
        </p>
      </>
    ),
  },
};
