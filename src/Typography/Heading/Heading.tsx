import { ReactNode } from "react";
import styled from "styled-components";

export interface HeadingProps {
  /**
   * The level of the heading.
   */
  $level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The content of the heading.
   */
  children: ReactNode;
}

// While this component is defined as an "h1" here, it will be overridden
// by the $level prop passed to the component.
const StyledHeading = styled.h1<HeadingProps>`
  color: ${(props) => props.theme.colors.grey.xdark};
  font-weight: 600;
  margin: 1rem 0;

  ${({ theme, $level }) => {
    switch ($level) {
      case 1:
        return `
          font-size: 3rem;
        `;
      case 2:
        return `
          font-size: 2.5rem;
        `;
      case 3:
        return `
          font-size: 2rem;
        `;
      case 4:
        return `
          font-size: 1.625rem;
        `;
      case 5:
        return `
          color: ${theme.colors.grey.dark};
          font-weight: 500;
          font-size: 1.375rem;
        `;
      case 6:
        return `
          color: ${theme.colors.grey.dark};
          font-weight: 500;
          font-size: 1rem;
          text-transform: uppercase;
        `;
    }
  }}
`;

/**
 * A heading component.
 */
export const Heading = ({ $level, children }: HeadingProps): JSX.Element => {
  return (
    <StyledHeading as={`h${$level}`} $level={$level}>
      {children}
    </StyledHeading>
  );
};
