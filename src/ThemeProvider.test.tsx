import { expect, describe, it } from "vitest";
import { render } from "../test/utils";
import { ThemeProvider } from "./ThemeProvider";

describe("ThemeProvider", () => {
  it("renders the children correctly", () => {
    const children = <div>Hello, world!</div>;
    const { getByText } = render(
      <ThemeProvider theme={{ primaryColor: "red" }}>{children}</ThemeProvider>
    );

    expect(getByText("Hello, world!")).toBeDefined();
  });
});
