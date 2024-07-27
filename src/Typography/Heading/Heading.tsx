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

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

// While this component is defined as an "h1" here, it will be overridden
// by the $level prop passed to the component.
const StyledHeading = styled.h1<HeadingProps>`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.accents.heading};
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
          color: ${theme.accents.text};
          font-weight: 500;
          font-size: 1.375rem;
        `;
      case 6:
        return `
          color: ${theme.accents.text};
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
export const Heading = ({
  $level,
  children,
  className,
}: HeadingProps): JSX.Element => {
  return (
    <StyledHeading as={`h${$level}`} $level={$level} className={className}>
      {children}
    </StyledHeading>
  );
};
