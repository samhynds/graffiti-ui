import { ReactNode } from "react";
import styled from "styled-components";

export interface RowProps {
  /**
   * The content of the Container.
   */
  children: ReactNode;

  /**
   * Styling and flex properties.
   */
  $width?: string;
  $height?: string;
  $flexGrow?: number | string;
  $gap?: string;
  $justifyContent?: string;
  $alignItems?: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledRow = styled.div<Omit<RowProps, "children">>`
  display: flex;
  flex-direction: row;
  ${(props) => (props.$width ? `width: ${props.$width};` : null)};
  ${(props) => (props.$height ? `height: ${props.$height};` : null)};
  ${(props) => (props.$flexGrow ? `flex-grow: ${props.$flexGrow};` : null)};
  ${(props) => (props.$gap ? `gap: ${props.$gap};` : null)};
  ${(props) =>
    props.$justifyContent
      ? `justify-content: ${props.$justifyContent};`
      : null};
  ${(props) =>
    props.$alignItems ? `align-items: ${props.$alignItems};` : null};
`;

export const Row = ({
  $width,
  $height,
  $flexGrow,
  $gap,
  $justifyContent,
  $alignItems,
  children,
  className,
}: RowProps) => {
  return (
    <StyledRow
      $width={$width}
      $height={$height}
      $flexGrow={$flexGrow}
      $gap={$gap}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
      className={className}
    >
      {children}
    </StyledRow>
  );
};
