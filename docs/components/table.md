# Table

Component for displaying data in a table format.

<iframe src="https://samhynds.github.io/graffiti-ui/storybook?path=/story/table-table--standard-table&viewMode=story&shortcuts=false&singleStory=true"
     style="width:100%; height:500px; border:0; margin-top: 20px;"
     title="graffiti-table-example-1"
   ></iframe>

See all the examples and details in the [Storybook](https://samhynds.github.io/graffiti-ui/storybook?path=/docs/table-table--docs).

## Usage

```tsx
import { Table } from "@samgl/graffiti-ui";

const MyTable = () => {
  return (
    <Table
      data={{
        headings: ["Make", "Model", "HP", "Displacement (cc)", "Year"],
        rows: [
          ["Mazda", "RX-7 Type R", 252, 1308, 1992],
          ["Mercedes", "190 E Evo II", 232, 2463, 1990],
          ["Jaguar", "XJ220", 542, 3498, 1993],
          ["Dodge", "Viper", 400, 7990, 1991],
          ["Honda", "NSX R", 290, 3179, 1992],
        ],
      }}
    />
  );
};
```

## Props

| Prop        | Type               | Default | Optional | Description                                                                                           |
| ----------- | ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `data`      | `TableProps[data]` |         | ❌       | An object containing the data to display in the table.                                                |
| `className` | `string`           |         | ✅       | The class name of the component, generally used when extending the component with a styled component. |
