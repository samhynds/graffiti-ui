import { ReactNode } from "react";
import styled from "styled-components";

export interface TextProps {
  /**
   * The content of the text.
   */
  children: ReactNode;
}

const StyledText = styled.div<TextProps>`
  color: ${(props) => props.theme.colors.grey.dark};
  font-size: 1rem;
  line-height: 1.7rem;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ol,
  ul {
    margin: 1rem 0;
    padding-left: 3rem;
  }

  a {
    color: ${(props) => props.theme.colors.blue.dark};
    transition: background-color 200ms ease-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue.light};
    }
  }
`;

export const Text = ({ children }: TextProps) => {
  return <StyledText>{children}</StyledText>;
};
