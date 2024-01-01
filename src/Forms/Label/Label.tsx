import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.grey.xdark};
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

/**
 * A label component which should be used alongside certain form inputs such as
 * TextInput, Dropdown, Checkbox, Radio and TextBox.
 */
export const Label = ({ children, ...props }: LabelProps): JSX.Element => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
