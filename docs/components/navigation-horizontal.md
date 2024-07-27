# Navigation (Horizontal)

A horizontal navigation component for navigating between pages.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/navigation-horizontal--horizontal-navigation&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-navigation-horizontal-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/navigation-horizontal--docs).

## Usage

```tsx
import { NavigationHorizontal } from "@samgl/graffiti-ui";

const MyNavigation = () => {
  return (
    <NavigationHorizontal
      links={[
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Explore",
          to: "/explore",
        },
        {
          text: "Notifications",
          to: "/notifications",
        },
        {
          text: "Messages",
          to: "/messages",
        },
        {
          text: "Bookmarks",
          to: "/bookmarks",
        },
        {
          text: "Profile",
          to: "/profile",
        },
        {
          text: "Settings",
          to: "/settings",
        },
        {
          text: "More",
          to: "/more",
        },
      ]}
    />
  );
};
```

## Props

| Prop        | Type                                 | Default | Optional | Description                                                                                           |
| ----------- | ------------------------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `links`     | `NavigationHorizontalProps["links"]` |         | ❌       | An array of links to display in the navigation.                                                       |
| `$linkSize` | `string`                             | `md`    | ✅       | The size of the links.                                                                                |
| `className` | `string`                             |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
