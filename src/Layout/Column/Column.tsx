import { ReactNode } from "react";
import styled from "styled-components";

export interface ColumnProps {
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
}

const StyledColumn = styled.div<Omit<ColumnProps, "children">>`
  display: flex;
  flex-direction: column;
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

export const Column = ({
  $width,
  $height,
  $flexGrow,
  $gap,
  $justifyContent,
  $alignItems,
  children,
}: ColumnProps) => {
  return (
    <StyledColumn
      $width={$width}
      $height={$height}
      $flexGrow={$flexGrow}
      $gap={$gap}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
    >
      {children}
    </StyledColumn>
  );
};
