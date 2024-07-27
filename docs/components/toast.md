# Toast

A component for displaying a notification to the user.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/notification-toast--standard-toast&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-toast-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/notification-toast--docs).

## Usage

```tsx
import { Toast } from "@samgl/graffiti-ui";

const MyToast = () => {
  return (
    <Toast
      title="You have a new message in your inbox"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut odio sit amet metus semper scelerisque ut fringilla turpis."
      buttons={[
        {
          text: "Cancel",
          onClick: () => {
            console.log("Cancel");
          },
        },
        {
          text: "Okay",
          isPrimary: true,
          onClick: () => {
            console.log("Okay");
          },
        },
      ]}
    />
  );
};
```

## Props

| Prop          | Type                  | Default | Optional | Description                                                                                           |
| ------------- | --------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `title`       | `string`              |         | ❌       | The title of the toast.                                                                               |
| `description` | `string`              |         | ✅       | The description of the toast.                                                                         |
| `buttons`     | `ToastProps[buttons]` |         | ✅       | An array of buttons to display in the toast.                                                          |
| `className`   | `string`              |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
