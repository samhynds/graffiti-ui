# Checkbox

The Checkbox component is a simple checkbox input. It can be used on its own or inside the [FormWrapper](./form-wrapper) component if you have multiple inputs.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/forms-checkbox--default-checkbox&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-checkbox-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/forms-checkbox--docs).

## Usage

```tsx
import { Checkbox } from "@samgl/graffiti-ui";

const MyCheckbox = () => {
  return (
    <Checkbox
      label="The quick brown fox jumps over the lazy dog"
      onClick={() => alert("Clicked!")}
    />
  );
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label`     | `string` |         | ❌       | The label to display next to the checkbox.                                                            |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |

All other props will also be passed to the underlying input element.
