# Theme

Graffiti provides a default theme which you can use, or optionally you can use your own theme. The theme includes variables for colours, fonts, borders, breakpoints etc.

You must wrap your app with the `ThemeProvider` component and pass it the theme you want to use, as described in the [Getting Started](../overview/getting-started#usage) documentation.

To use your own theme, you can copy the default theme and modify it to your liking. Then you pass your theme to the `ThemeProvider` component instead of the default theme.

The default theme is located in the [src/themes/default.ts](https://github.com/samhynds/graffiti-ui/blob/main/src/themes/default.ts) file.

## Example Custom Theme

```tsx
// main.tsx - your main entry point
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, GlobalStyles } from "@samgl/graffiti-ui";
import { customTheme } from "./customTheme";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```
