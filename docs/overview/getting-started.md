# Getting Started

## Overview

Graffiti is a collection of reusable React components designed to make building web interfaces easier and more enjoyable. The goal of Graffiti is to provide a solid foundation for your projects, without the hassle of starting from scratch.

Graffiti includes:

- A variety of pre-built React components for common UI elements like buttons, forms, navigation bars, and more
- Customisable theming to match your project's style
- Pre-built layouts and templates to help you get started with your project quickly
- Features like responsive design, full type support, and accessible components built-in

Here you'll find comprehensive documentation and a range of [live examples](https://samhynds.github.io/graffiti-demo) using Graffiti to help you get started.

## Installation

```bash
# With npm
npm install @samgl/graffiti-ui

# With yarn
yarn add @samgl/graffiti-ui
```

## Usage

To get started with Graffiti, you'll need to import the themes, global styles, and optionally react-router if you want to use the navigation components. Then, wrap your react app like so:

```tsx
// main.tsx - your main entry point
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, defaultTheme, GlobalStyles } from "@samgl/graffiti-ui";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```

After this you're free to use any of the Graffiti components in your app. Continuing from the example above, here's an example of a simple layout using other Graffiti components:

```tsx
// App.tsx - your app component
import {
  Container,
  Row,
  Column,
  Button,
  Heading,
  Text,
} from "@samgl/graffiti-ui";

const App = () => {
  return (
    <Container $width="800px" $alignment="center" $flexDirection="row">
      <Row>
        <Column>
          <Heading level={1}>Hello, world!</Heading>
          <Text>This is a paragraph.</Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button label="Click me!" />
        </Column>
      </Row>
    </Container>
  );
};
```
