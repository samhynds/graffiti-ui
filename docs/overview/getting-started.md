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

To get started with Graffiti, you'll need to import the themes, global styles, and optionally react-router if you want to use the navigation components. Then, wrap your React app like so:

```tsx
// main.tsx - your main entry point
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, theme } from "@samgl/graffiti-ui";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
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
      <Column>
        <Heading $level={1}>Welcome to your Graffiti app!</Heading>
      </Column>
      <Column $gap="20px">
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          commodi error cupiditate consectetur consequatur est, at repellat
          repellendus ex vero quis voluptates optio, ipsum similique veritatis
          perferendis voluptatibus ipsa omnis.
        </Text>
        <Row $gap="20px">
          <Button label="Click me!" />
          <Button $primary={true} label="No click me!" />
        </Row>
      </Column>
    </Container>
  );
};

export default App;
```
