import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page? If so, the button will be
   * filled with the primary accent color of the theme. Ideally, you should
   * only have one primary button per page at any time.
   */
  $primary?: boolean;

  /**
   * The size of the button.
   */
  size?: "small" | "medium" | "large" | "square";

  /**
   * The text label inside the button.
   */
  label?: string;

  /**
   * The icon that should appear next to the text label.
   */
  icon?: ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

export interface IconProps {
  /**
   * The size of the parent button component, automatically passed to this child
   * icon component.
   */
  size: ButtonProps["size"];
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  padding: ${({ size }) => {
    switch (size) {
      case "large":
        return "0.8rem 1.25rem";
      case "medium":
        return "0.625rem 1.25rem";
      case "small":
        return "0.4375rem 0.875rem";
      case "square":
        return "0.5rem";
      default:
        return "0.625rem 1.25rem";
    }
  }};

  font-size: ${({ size }) => {
    switch (size) {
      case "large":
        return "1.25rem";
      case "medium":
        return "1rem";
      case "small":
        return "0.875rem";
      default:
        return "1rem";
    }
  }};

  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.white : theme.accents.text};

  background-color: ${({ $primary, theme }) =>
    $primary ? theme.accents.primary.mid : theme.colors.white};

  border: 0.0625rem solid
    ${({ $primary, theme }) =>
      $primary ? theme.accents.primary.dark : theme.accents.border};

  &:hover {
    background-color: ${({ $primary, theme }) =>
      $primary ? theme.accents.primary.dark : theme.accents.border};
  }
`;

const StyledIcon = styled.span<IconProps>`
  margin-right: ${(props) => (props.size === "square" ? "0" : "0.75rem")};
  ${(props) => props.size !== "square" && "margin-left: -0.2rem;"}
  display: inline-flex;

  & svg {
    ${(props) =>
      props.size === "square"
        ? "width: 1.75em; height: 1.75em;"
        : "width: 1.25em; height: 1.25em;"}
  }
`;

export const Button = ({
  label,
  icon,
  $primary = false,
  size = "medium",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type="button" size={size} $primary={$primary} {...props}>
      {icon && <StyledIcon size={size}>{icon}</StyledIcon>}
      {label}
    </StyledButton>
  );
};
