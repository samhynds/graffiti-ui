# Column

The column component is one of three layout components in Graffiti. It's used to help you position items on the screen. It's based on flexbox and can be used to create a column layout with a fixed width, a flexible width, or a responsive width.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/layout-column--column-with-content&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-column-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/layout-column--docs).

## Usage

```tsx
import { Column } from "@samgl/graffiti-ui";

const MyColumn = () => {
  return (
    <Column>
      <Heading $level={2}>Some content inside a column</Heading>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
          finibus sem, sed imperdiet nibh. Duis nec lorem ipsum. Nulla sagittis
          mi at libero pretium volutpat. Nam interdum quis urna quis cursus.
          Praesent id purus sed lectus finibus dignissim vel et ex. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Quisque varius congue tellus ut tempus.
        </p>
      </Text>
    </Column>
  );
};
```

## Props

| Prop              | Type        | Default | Optional | Description                                 |
| ----------------- | ----------- | ------- | -------- | ------------------------------------------- |
| `children`        | `ReactNode` |         | ❌       | The content of the Column.                  |
| `$width`          | `string`    |         | ✅       | The width of the Column.                    |
| `$height`         | `string`    |         | ✅       | The height of the Column.                   |
| `$flexGrow`       | `number`    |         | ✅       | The flex grow factor of the Column.         |
| `$gap`            | `string`    |         | ✅       | The gap between the Column and the content. |
| `$justifyContent` | `string`    |         | ✅       | The justify content of the Column.          |
| `$alignItems`     | `string`    |         | ✅       | The align items of the Column.              |
