import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  :root {
    font-size: 16px;
    font-family: ${(props) => props.theme.font};
  }

  button {
    font-family: ${(props) => props.theme.font};
    transition: background-color 200ms ease-out;
  }
`;

export { GlobalStyles };
