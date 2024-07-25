# Styling

There are two ways to change the look of Graffiti components: by changing the theme or by extending and modifying the individual component styles using the `styled-components` library.

## Theme

Graffiti provides a default theme which you can use, or optionally you can copy it to create your own theme. The theme is responsible for fonts and colours across all of the components.

If you want to make specific styling changes to the components, you'll likely want to extend the component styles themselves.

## Extending the component styles

The Graffiti components are built using the `styled-components` library which you can extend in your own project. This is the recommended approach if you want to make more extensive or specific styling changes to the components.

To extend the component styles, you'll need to import the `styled` function from `styled-components` and pass it the component you want to extend. Then you can use the `styled` function to create a new component that inherits the styles of the original component.

```tsx
import styled from "styled-components";
import { Button } from "@samgl/graffiti-ui";

const CustomButton = styled(Button)`
  background-color: #e11d48;
  border: 1px solid #9f1239;
  color: white;
  font-family: monospace;

  &:hover {
    background-color: #9f1239;
  }
`;
```

This will create a new component called `CustomButton` that inherits the styles of the `Button` component, but overrides the specified styles. The other styles from the button will remain as they're defined in the component. You can then use this new component in your app like any other component:

```tsx
<CustomButton label="Click me!" />
```

This will render a button with the custom styles applied. For more information on how to use `styled-components` to extend the component styles, check out the [styled-components documentation](https://styled-components.com/docs/basics#extending-styles).
