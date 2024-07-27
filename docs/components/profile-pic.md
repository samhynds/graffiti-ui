# Profile Picture

Displays a round image of a specified size for a user's profile picture.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/media-profile-picture--example-profile-pic&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-profile-picture-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/media-profile-picture--docs).

## Usage

```tsx
import { ProfilePic } from "@samgl/graffiti-ui";

const MyProfilePic = () => {
  return (
    <ProfilePic
      src="https://picsum.photos/id/237/128"
      alt="Profile Picture"
      $size="64px"
    />
  );
};
```

## Props

| Prop        | Type     | Default | Optional | Description                                                                                           |
| ----------- | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `src`       | `string` |         | ❌       | The source of the image.                                                                              |
| `$size`     | `string` |         | ❌       | The size of the image passed to the CSS.                                                              |
| `alt`       | `string` |         | ✅       | The alt text of the image.                                                                            |
| `className` | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
