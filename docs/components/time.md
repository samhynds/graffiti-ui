# Time

A component for displaying a date and time in a human readable format, either relative to the current time or absolute.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/time-time--absolute-time&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:200px; border:0; margin-top: 20px;"
     title="graffiti-time-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/time-time--docs).

## Usage

```tsx
import { Time } from "@samgl/graffiti-ui";

const MyTime = () => {
  return <Time date={new Date(Date.now() - 1000 * 60 * 15)} />;
};
```

## Props

| Prop        | Type      | Default | Optional | Description                                                                                           |
| ----------- | --------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `date`      | `Date`    |         | ❌       | The date to display.                                                                                  |
| `relative`  | `boolean` | `false` | ✅       | If `true` the time will be displayed relative to the current time.                                    |
| `className` | `string`  |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
