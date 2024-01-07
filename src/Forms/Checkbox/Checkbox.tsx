import { HTMLAttributes } from "react";
import styled from "styled-components";

import { Label } from "../Label";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Label to display next to the checkbox.
   */
  label: string;
}

const StyledCheckbox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.standard};
  border: 0.125rem solid ${(props) => props.theme.colors.grey.light};
  margin-right: 0.625rem;
  accent-color: ${(props) => props.theme.colors.primary.mid};
`;

/**
 * Checkbox
 */
export const Checkbox = ({ label, ...props }: CheckboxProps): JSX.Element => {
  return (
    <>
      <Label $layout="row">
        <StyledCheckbox type="checkbox" {...props} />
        {label}
      </Label>
    </>
  );
};
