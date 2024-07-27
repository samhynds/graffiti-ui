# Row

One of the three layout components in Graffiti, along with [Container](./container) and [Column](./column). Used to help you position items along the horizontal axis.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/layout-row--row-with-content&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-row-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/layout-row--docs).

## Usage

```tsx
import { Row, Heading, Text } from "@samgl/graffiti-ui";

const MyRow = () => {
  return (
    <Row>
      <Heading $level={2}>Some content inside a row</Heading>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
          finibus sem, sed imperdiet nibh. Duis nec lorem ipsum. Nulla sagittis
          mi at libero pretium volutpat.
        </p>
      </Text>
    </Row>
  );
};
```

## Props

| Prop              | Type        | Default | Optional | Description                                                                                           |
| ----------------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `children`        | `ReactNode` |         | ❌       | The content of the Row.                                                                               |
| `$width`          | `string`    |         | ✅       | The width of the Row.                                                                                 |
| `$height`         | `string`    |         | ✅       | The height of the Row.                                                                                |
| `$flexGrow`       | `number`    |         | ✅       | The flex grow factor of the Row.                                                                      |
| `$gap`            | `string`    |         | ✅       | The gap between the items in the row.                                                                 |
| `$justifyContent` | `string`    |         | ✅       | The justify content of the Row.                                                                       |
| `$alignItems`     | `string`    |         | ✅       | The align items of the Row.                                                                           |
| `className`       | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
