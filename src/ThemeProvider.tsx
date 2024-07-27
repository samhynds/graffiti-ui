import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/GlobalStyles";

interface GraffitiThemeProviderProps {
  children: React.ReactNode;
  theme: {
    [key: string]: unknown;
  };
}

const GraffitiThemeProvider = ({
  children,
  theme,
}: GraffitiThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { GraffitiThemeProvider as ThemeProvider };
