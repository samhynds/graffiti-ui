import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Should the label and input be above and below each other (column) or
   * alongside each other (row)?
   */
  $layout?: "column" | "row";

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledLabel = styled.label<LabelProps>`
  color: ${({ theme }) => theme.accents.text};
  font-size: ${(props) => (props.$layout === "row" ? "1rem" : "0.875rem")};
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: ${({ $layout }) => $layout};
  ${({ $layout }) => $layout === "row" && "align-items: center;"}
`;

/**
 * A label component which should be used alongside certain form inputs such as
 * TextInput, Dropdown, Checkbox, Radio and TextBox.
 */
export const Label = ({
  children,
  $layout = "column",
  ...props
}: LabelProps): JSX.Element => {
  return (
    <StyledLabel $layout={$layout} {...props}>
      {children}
    </StyledLabel>
  );
};
