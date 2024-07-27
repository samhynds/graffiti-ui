# Modal

Used to show a message or content over the top of the current page. Also optionally renders a full-screen overlay.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/modal-modal--standard-modal&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:700px; border:0; margin-top: 20px;"
     title="graffiti-modal-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/modal-modal--docs).

## Usage

```tsx
import { Modal, FormWrapper, TextInput } from "@samgl/graffiti-ui";

const MyModal = () => {
  return (
    <Modal
      title="Log in"
      subtitle="To continue, please log in."
      buttons={[
        {
          text: "Log In",
          isPrimary: true,
          onClick: () => {
            console.log("Log In");
          },
        },
      ]}
    >
      <FormWrapper>
        <TextInput
          label="Email"
          placeholder="youremail@example.com"
          type="email"
        />
        <TextInput
          label="Password"
          placeholder="************"
          type="password"
        />
      </FormWrapper>
    </Modal>
  );
};
```

## Props

| Prop         | Type        | Default | Optional | Description                                                                                           |
| ------------ | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `title`      | `string`    |         | ✅       | The title of the modal.                                                                               |
| `subtitle`   | `string`    |         | ✅       | The subtitle of the modal.                                                                            |
| `buttons`    | `Button[]`  |         | ✅       | An array of buttons to display in the modal.                                                          |
| `children`   | `ReactNode` |         | ❌       | The content of the modal.                                                                             |
| `hasOverlay` | `boolean`   | `true`  | ✅       | Should the modal have a full-screen overlay?                                                          |
| `className`  | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
