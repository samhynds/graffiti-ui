import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from "../src/GlobalStyles";
import { theme } from "../src/themes/default";

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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
