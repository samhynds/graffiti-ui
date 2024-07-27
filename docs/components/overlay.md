# Overlay

A full-screen overlay component that can be used to cover the whole page. Used in the [Modal](./modal) component.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/misc-overlay--light-overlay&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-overlay-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/misc-overlay--docs).

## Usage

```tsx
import { Overlay } from "@samgl/graffiti-ui";

const MyOverlay = () => {
  return <Overlay $color="light" />;
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$color`    | `string` | `light` | ✅       | The color of the overlay.                                                                             |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
