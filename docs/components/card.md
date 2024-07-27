# Card

The Card component is a simple container for content. It's designed to be used as a container for other components. If you want a container component without a border or other styling, you can use the [Container](./container), [Row](./row), or [Column](./column) components instead.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/card-card--standard-card&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-card-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/card-card--docs).

## Usage

```tsx
import { Card } from "@samgl/graffiti-ui";

const MyCard = () => {
  return (
    <Card>
      <Heading $level={3}>Card Title</Heading>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          convallis sed libero vitae rutrum. Vivamus porta, ipsum pellentesque
          commodo gravida, risus elit efficitur tortor, at laoreet lacus diam
          vitae risus. Donec id erat aliquam, bibendum justo sed, faucibus
          risus.
        </p>
      </Text>
    </Card>
  );
};
```

## Props

| Prop        | Type        | Default | Optional | Description                                                                                           |
| ----------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode` |         | ❌       | The content of the Card.                                                                              |
| `className` | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
