import styled from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page? If so, the button will be
   * filled with the primary accent color of the theme. Ideally, you should
   * only have one primary button per page at any time.
   */
  primary?: boolean;

  /**
   * What background color to use. This overrides the background color set by
   * the "primary" prop.
   */
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";

  /**
   * The text label inside the button.
   */
  label: string;

  /**
   * Which icon should appear next to the text of the button?
   */
  icon?: JSX.Element | HTMLElement;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary.mid};
  border: 0.125rem solid ${(props) => props.theme.colors.primary.dark};
  border-radius: ${(props) => props.theme.borderRadius.standard};
`;

/**
 * The standard button component. Should be used for forms, modals and actions
 * that don't change which page the user is on. If your action changes the page,
 * you should consider using an Anchor component.
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? "primary" : "secondary";
  return (
    <StyledButton
      type="button"
      className={[`graffiti-button`, mode, size].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
