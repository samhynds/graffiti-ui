import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../src/GlobalStyles";
import { defaultTheme } from "../src/themes/default";

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ComponentWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
