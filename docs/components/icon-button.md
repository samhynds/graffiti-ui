# IconButton

The IconButton component is a variant of the standard button that displays only an icon without text. It's ideal for compact UI elements where space is limited or when the icon alone sufficiently conveys the action.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/buttons-icon--example-icon-button&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-iconbutton-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/buttons-icon--docs).

## Usage

```tsx
import { IconButton } from "@samgl/graffiti-ui";
import { Heart } from "@phosphor-icons/react"; // your icon library of choice

const MyIconButton = () => {
  return (
    <IconButton icon={<Heart />} size="1rem" onClick={() => alert("Liked!")} />
  );
};
```

## Props

| Prop        | Type         | Default | Optional | Description                                                                                           |
| ----------- | ------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `icon`      | `ReactNode`  |         | ❌       | The icon to display in the button.                                                                    |
| `onClick`   | `() => void` |         | ❌       | The function to call when the button is clicked.                                                      |
| `size`      | `string`     | 1 rem   | ✅       | The size of the IconButton.                                                                           |
| `className` | `string`     |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
