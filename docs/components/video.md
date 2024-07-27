# Video

A custom video player component for displaying videos on a page.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/media-video--example-video&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-video-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/media-video--docs).

## Usage

```tsx
import { Video } from "@samgl/graffiti-ui";

const MyVideo = () => {
  return (
    <Video
      sources={[
        {
          src: "http://localhost:8000/test2.mp4",
          type: "video/mp4",
        },
      ]}
      $width="640px"
      $height="360px"
    />
  );
};
```

## Props

| Prop            | Type                             | Default      | Optional | Description                                                                                                                         |
| --------------- | -------------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sources`       | `VideoProps[sources]`            |              | ❌       | An array of sources to display in the video.                                                                                        |
| `$width`        | `string`                         |              | ❌       | The width of the video.                                                                                                             |
| `$height`       | `string`                         |              | ❌       | The height of the video.                                                                                                            |
| `controls`      | `boolean`                        | `true`       | ✅       | If `true` the video will display controls.                                                                                          |
| `$showControls` | `"always" \| "hover"`            | `"always"`   | ✅       | If `"always"` the video will always display controls. If `"hover"` the controls will only display when the mouse is over the video. |
| `autoPlay`      | `boolean`                        | `false`      | ✅       | If `true` the video will start playing automatically.                                                                               |
| `loop`          | `boolean`                        | `false`      | ✅       | If `true` the video will loop.                                                                                                      |
| `muted`         | `boolean`                        | `false`      | ✅       | If `true` the video will be muted.                                                                                                  |
| `preload`       | `"none" \| "metadata" \| "auto"` | `"metadata"` | ✅       | The preload behaviour of the video.                                                                                                 |
| `className`     | `string`                         |              | ✅       | The class name of the component, generally used when extending the component with a styled component.                               |
