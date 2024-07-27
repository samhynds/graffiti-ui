# Text Input

A standard text input component - a one-line input used for general text, emails, passwords etc. Can optionally be given a label.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/forms-text-input--text-input-with-label&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-text-input-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/forms-text-input--docs).

## Usage

```tsx
import { TextInput } from "@samgl/graffiti-ui";

const MyTextInput = () => {
  return <TextInput label="Username" />;
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label`     | `string` |         | ✅       | The label to display next to the text input.                                                          |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |

All other props will also be passed to the underlying input element. You can pass the `type` prop to change the type of the input, for example `type="password"` to make the input an password input.
