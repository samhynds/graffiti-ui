# Heading

Heading is a styled typographic component for displaying headings of various levels on a page.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/typography-heading--level-1&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-heading-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/typography-heading--docs).

## Usage

```tsx
import { Heading } from "@samgl/graffiti-ui";

const MyHeading = () => {
  return <Heading $level={1}>Heading 1</Heading>;
};
```

## Props

| Prop        | Type        | Default | Optional | Description                                                                                           |
| ----------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$level`    | `number`    |         | ❌       | The heading level.                                                                                    |
| `children`  | `ReactNode` |         | ❌       | The content of the heading.                                                                           |
| `className` | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
