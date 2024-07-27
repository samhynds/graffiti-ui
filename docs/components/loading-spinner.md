# Loading Spinner

Used as a loading indicator when data is being fetched or when a page is loading.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/loading-spinner--example-loading-spinner&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-loading-spinner-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/loading-spinner--docs).

## Usage

```tsx
import { LoadingSpinner } from "@samgl/graffiti-ui";

const MyLoadingSpinner = () => {
  return <LoadingSpinner $size="3rem" $ringWidth="0.25rem" $arcColor="#f00" />;
};
```

## Props

| Prop         | Type     | Default | Optional | Description                                                                                           |
| ------------ | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `$size`      | `string` |         | ✅       | The size of the loading spinner.                                                                      |
| `$ringWidth` | `string` |         | ✅       | The thickness of the spinner.                                                                         |
| `$arcColor`  | `string` |         | ✅       | The colour of the spinning section.                                                                   |
| `$ringColor` | `string` |         | ✅       | The colour of non-spinning section.                                                                   |
| `className`  | `string` |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
