import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Should the label and input be above and below each other (column) or
   * alongside each other (row)?
   */
  $layout?: "column" | "row";
}

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.theme.colors.grey.dark};
  font-size: ${(props) => (props.$layout === "row" ? "1rem" : "0.875rem")};
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: ${(props) => props.$layout};
  ${(props) => props.$layout === "row" && "align-items: center;"}
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
