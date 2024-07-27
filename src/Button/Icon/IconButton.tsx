import { ReactNode } from "react";
import styled from "styled-components";

export interface IconButtonProps {
  icon: ReactNode;
  $size?: string;
  onClick: () => void;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledIconButton = styled.button<Pick<IconButtonProps, "$size">>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  transition: color 0.2s;
  color: inherit;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.accents.link};
  }
`;

export const IconButton = ({
  icon,
  $size = "1rem",
  onClick,
  className,
}: IconButtonProps): JSX.Element => {
  return (
    <StyledIconButton className={className} $size={$size} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};
