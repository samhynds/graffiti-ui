# Form Wrapper

Use the FormWrapper component to wrap multiple form inputs and labels that appear next to each other. It will apply styling to give spacing between each input.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/forms-wrapper--standard-form-wrapper&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-form-wrapper-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/forms-wrapper--docs).

## Usage

```tsx
import { FormWrapper, TextInput } from "@samgl/graffiti-ui";

const MyFormWrapper = () => {
  return (
    <FormWrapper>
      <TextInput
        label="Email"
        placeholder="youremail@example.com"
        type="email"
      />
      <TextInput label="Password" placeholder="************" type="password" />
    </FormWrapper>
  );
};
```

## Props

| Prop        | Type        | Default | Optional | Description                                                                                           |
| ----------- | ----------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode` |         | ❌       | The content of the FormWrapper.                                                                       |
| `className` | `string`    |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
