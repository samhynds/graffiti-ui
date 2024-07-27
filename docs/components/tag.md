# Tag

A highlighted inline piece of text.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/text-tag--standard-tag&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-tag-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/text-tag--docs).

## Usage

```tsx
import { Tag } from "@samgl/graffiti-ui";

const MyTag = () => {
  return <Tag $color="cyan" label="Hello, this is a tag" />;
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label`     | `string` |         | ❌       | The text to display inside the tag.                                                                   |
| `$color`    | `string` |         | ❌       | The colour of the tag. Should match a colour from the theme.                                          |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
