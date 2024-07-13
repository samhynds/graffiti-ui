import { ReactNode } from "react";
import styled from "styled-components";

export interface IconButtonProps {
  icon: ReactNode;
  $size?: string;
  onClick: () => void;
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
  color: ${(props) => props.theme.colors.grey.xdark};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  transition: color 0.2s;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
  }
`;

export const IconButton = ({
  icon,
  $size = "1rem",
  onClick,
}: IconButtonProps): JSX.Element => {
  return (
    <StyledIconButton $size={$size} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};