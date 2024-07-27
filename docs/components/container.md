# Container

The container component is generally the outermost layout component set at the root or page level of your app. You can use it to set the width of the pages and how the page should be aligned.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/layout-container--center-container&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-container-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/layout-container--docs).

## Usage

```tsx
import { Container, Heading, Text } from "@samgl/graffiti-ui";

const MyContainer = () => {
  return (
    <Container $width="800px" $alignment="center" $flexDirection="column">
      <Heading $level={1}>Hello, world!</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Container>
  );
};
```

## Props

| Prop             | Type        | Default | Optional | Description                                                                                           |
| ---------------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$width`         | `string`    |         | ❌       | The width of the Container.                                                                           |
| `$alignment`     | `string`    |         | ❌       | Which side the content inside the container should be aligned to.                                     |
| `$flexDirection` | `string`    |         | ❌       | The direction of the content inside the container.                                                    |
| `children`       | `ReactNode` |         | ❌       | The content of the Container.                                                                         |
| `className`      | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
