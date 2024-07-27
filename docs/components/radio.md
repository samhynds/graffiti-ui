# Radio

A single radio button, can be grouped with others using a [RadioGroup](./radio-group) component.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/forms-radio--default-radio&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-radio-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/forms-radio--docs).

## Usage

```tsx
import { Radio } from "@samgl/graffiti-ui";

const MyRadio = () => {
  return <Radio label="The quick brown fox jumps over the lazy dog" />;
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label`     | `string` |         | ❌       | The label to display next to the radio button.                                                        |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
