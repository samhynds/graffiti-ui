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
  border-radius: ${(props) => props.theme.borderRadius.standard};

  padding: ${(props) => {
    switch (props.size) {
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

  font-size: ${(props) => {
    switch (props.size) {
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

  color: ${(props) =>
    props.$primary ? props.theme.colors.white : props.theme.colors.grey.dark};

  background-color: ${(props) =>
    props.$primary ? props.theme.colors.primary.mid : props.theme.colors.white};

  border: 0.125rem solid
    ${(props) =>
      props.$primary
        ? props.theme.colors.primary.dark
        : props.theme.colors.grey.light};

  &:hover {
    background-color: ${(props) =>
      props.$primary
        ? props.theme.colors.primary.dark
        : props.theme.colors.grey.light};
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

/**
 * The standard button component. Should be used for forms, modals and actions
 * that don't change which page the user is on. If your action changes the page,
 * you should consider using an Anchor component.
 */
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
