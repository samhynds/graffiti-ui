import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from "../src/GlobalStyles";
import { lightTheme } from "../src/themes/light";

import "./global.css";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
