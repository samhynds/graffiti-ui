import { expect, describe, it } from "vitest";
import { render } from "../../test/utils";
import { Table } from "./Table";

describe("Table", () => {
  const tableData = {
    headings: ["Make", "Model", "HP", "Displacement (cc)", "Year"],
    rows: [
      ["Mazda", "RX-7 Type R", 252, 1308, 1992],
      ["Mercedes", "190 E Evo II", 232, 2463, 1990],
      ["Jaguar", "XJ220", 542, 3498, 1993],
      ["Dodge", "Viper", 400, 7990, 1991],
      ["Honda", "NSX R", 290, 3179, 1992],
    ],
  };

  it("renders headings correctly", () => {
    const { getAllByRole } = render(<Table data={tableData} />);
    const headingCells = getAllByRole("columnheader");

    headingCells.forEach((headingCell, i) => {
      expect(headingCell.textContent).toBe(tableData.headings[i]);
    });
  });

  it("renders the body correctly", () => {
    const { getAllByRole } = render(<Table data={tableData} />);
    const bodyCells = getAllByRole("cell");
    const flatRows = tableData.rows.flat();

    bodyCells.forEach((bodyCell, i) => {
      expect(bodyCell.textContent).toBe(String(flatRows[i]));
    });
  });
});
