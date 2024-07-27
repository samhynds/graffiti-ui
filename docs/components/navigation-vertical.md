# Navigation (Vertical)

A vertical navigation component for navigating between pages.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/navigation-vertical--vertical-navigation&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-navigation-vertical-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/navigation-vertical--docs).

## Usage

```tsx
import { NavigationVertical } from "@samgl/graffiti-ui";

const MyNavigation = () => {
  return (
    <NavigationVertical
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

| Prop        | Type                               | Default | Optional | Description                                                                                           |
| ----------- | ---------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `links`     | `NavigationVerticalProps["links"]` |         | ❌       | An array of links to display in the navigation.                                                       |
| `$linkSize` | `string`                           | `md`    | ✅       | The size of the links.                                                                                |
| `className` | `string`                           |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
