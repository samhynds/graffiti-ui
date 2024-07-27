# Radio Group

A styled radio group component for selecting a single item from a list of items.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/forms-radio-group--radio-group-with-label&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-radio-group-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/forms-radio-group--docs).

## Usage

```tsx
import { RadioGroup } from "@samgl/graffiti-ui";

const MyRadioGroup = () => {
  return (
    <RadioGroup
      label="What is your favourite colour?"
      items={["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]}
      groupName="colors"
    />
  );
};
```

## Props

| Prop        | Type       | Default | Optional | Description                                                                                           |
| ----------- | ---------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `items`     | `string[]` |         | ❌       | A list of strings reprenting each item in the radio group.                                            |
| `groupName` | `string`   |         | ❌       | Identifier to tie the multiple radio buttons together.                                                |
| `label`     | `string`   |         | ✅       | An optional label to display before the radio options.                                                |
| `className` | `string`   |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
