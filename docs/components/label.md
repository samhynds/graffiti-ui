# Label

A styled label component for displaying a label next to a form input. Other form inputs such as [TextInput](./text-input), [Dropdown](./dropdown), [Checkbox](./checkbox) and [Radio](./radio) are already wrapped in a label component. Use this if you want to use the label for other purposes.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/forms-label--default-label&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-label-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/forms-label--docs).

## Usage

```tsx
import { Label } from "@samgl/graffiti-ui";

const MyLabel = () => {
  return (
    <Label>
      Username <input type="text" />
    </Label>
  );
};
```

## Props

| Prop        | Type        | Default  | Optional | Description                                                                                           |
| ----------- | ----------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$layout`   | `string`    | `column` | ❌       | Should the label and input be above and below each other (column) or alongside each other (row)?      |
| `children`  | `ReactNode` |          | ❌       | The content of the Label.                                                                             |
| `className` | `string`    |          | ✅       | The class name of the component, generally used when extending the component with a styled component. |
