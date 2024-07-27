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
    font-family: ${({ theme }) => theme.fonts.body};
  }

  button, input, select, option {
    font-family: ${({ theme }) => theme.fonts.body};
    transition: background-color 200ms ease-out;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
   }
`;

export { GlobalStyles };
