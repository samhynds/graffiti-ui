# Navigation Link

A styled link component for navigating between pages. Used inside the [Navigation Horizontal](./navigation-horizontal) and [Navigation Vertical](./navigation-vertical) components.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/navigation-link--link-with-icon&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-navigation-link-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/navigation-link--docs).

## Usage

```tsx
import { NavigationLink } from "@samgl/graffiti-ui";
import { House } from "@phosphor-icons/react"; // your icon library of choice

const MyNavigationLink = () => {
  return <NavigationLink text="Home" to="/" icon={<House />} $linkSize="md" />;
};
```

## Props

| Prop        | Type        | Default | Optional | Description                                                                                           |
| ----------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `text`      | `string`    |         | ❌       | The text of the link.                                                                                 |
| `to`        | `string`    |         | ❌       | The destination of the link.                                                                          |
| `$linkSize` | `string`    | `md`    | ✅       | The size of the link.                                                                                 |
| `icon`      | `ReactNode` |         | ✅       | The icon to display next to the text.                                                                 |
| `className` | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
