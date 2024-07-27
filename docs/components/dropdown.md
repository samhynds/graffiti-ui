# Dropdown

A styled dropdown component for selecting a single item from a list of items.

<iframe src="https://samhynds.github.io/graffiti-ui/?path=/story/forms-dropdown--default-label&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-dropdown-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/?path=/docs/forms-dropdown--docs).

## Usage

```tsx
import { Dropdown } from "@samgl/graffiti-ui";

const MyDropdown = () => {
  return (
    <Dropdown
      label="What is your favourite fruit?"
      items={[
        { label: "Orange", value: "orange" },
        { label: "Banana", value: "banana" },
        { label: "Apple", value: "apple" },
        { label: "Grapefruit", value: "grapefruit" },
        { label: "Pineapple", value: "pineapple" },
        { label: "Grapes", value: "grapes" },
      ]}
    />
  );
};
```

## Props

| Prop    | Type                   | Default | Optional | Description                                   |
| ------- | ---------------------- | ------- | -------- | --------------------------------------------- |
| `label` | `string`               |         | ❌       | The label to show above the dropdown.         |
| `items` | `DropdownProps[items]` |         | ❌       | An array of items to display in the dropdown. |
