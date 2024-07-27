# Text

Text is a styled typographic component for displaying text on a page. It's best used for longer pieces of text that make up major parts of a page. Smaller bits of text might be better suited to your own custom components.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/typography-text--with-lists-and-links&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-text-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/typography-text--docs).

## Usage

```tsx
import { Text } from "@samgl/graffiti-ui";

const MyText = () => {
  return (
    <Text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
        eros velit, at gravida leo dictum eu. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Maecenas at sem eu ipsum euismod dictum non vitae felis. Maecenas
        scelerisque sem vitae massa lacinia sagittis. Donec ultrices vitae velit
        vitae interdum. Integer et libero mattis, convallis neque vitae,
        sollicitudin risus. Proin vel tincidunt nisi.
      </p>
    </Text>
  );
};
```

## Props

| Prop        | Type        | Default | Optional | Description                                                                                           |
| ----------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode` |         | ❌       | The content of the text.                                                                              |
| `className` | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
