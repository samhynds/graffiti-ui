# Layout

The layout in Graffiti is based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) layout model. You can implement the Flexbox layout model in your own projects by using the [Container](../components/container), [Row](../components/row) and [Column](../components/column) components.

## Container

The container component is generally the outermost layout component set at the root or page level of your app. You can use it to set the width of the pages and how the page should be aligned.

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

## Rows and Columns

Then you can use the [Row](../components/row) and [Column](../components/column) components to create a layout inside the container where items are arranged side by side (Row) or vertically (Column).

```tsx
import { Container, Row, Column, Heading, Text } from "@samgl/graffiti-ui";

const MyPage = () => {
  return (
    <Container $width="800px" $alignment="center" $flexDirection="column">
      <Row $gap="20px">
        <Column>
          <Heading $level={1}>Column 1</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Column>
        <Column>
          <Heading $level={1}>Column 2</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Column>
      </Row>
    </Container>
  );
};
```
