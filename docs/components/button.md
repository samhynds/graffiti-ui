# Button

The standard button component. Should be used for forms, modals and actions that don't change which page the user is on. If your action changes the page, you should consider using a Navigation component.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/buttons-button--primary&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-button-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/buttons-button--docs).

## Usage

```tsx
import { Button } from "@samgl/graffiti-ui";
import { Heart } from "@phosphor-icons/react"; // your icon library of choice

const MyButton = () => {
  return (
    <Button
      $primary={true}
      label="Click me!"
      size="large"
      icon={<Heart />}
      onClick={() => alert("Clicked!")}
    />
  );
};
```

## Props

| Prop        | Type                                               | Default    | Optional | Description                                                                                           |
| ----------- | -------------------------------------------------- | ---------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$primary`  | `boolean`                                          | `false`    | ✅       | If `true` the button will be filled with the primary accent color of the theme.                       |
| `label`     | `string`                                           |            | ❌       | The text label inside the button.                                                                     |
| `size`      | `"small"` \| `"medium"` \| `"large"` \| `"square"` | `"medium"` | ✅       | The size of the button.                                                                               |
| `icon`      | `ReactNode`                                        |            | ✅       | The icon that should appear next to the text label.                                                   |
| `onClick`   | `() => void`                                       |            | ✅       | The function to call when the button is clicked.                                                      |
| `className` | `string`                                           |            | ✅       | The class name of the component, generally used when extending the component with a styled component. |
