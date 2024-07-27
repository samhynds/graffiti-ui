import { HTMLAttributes } from "react";
import styled from "styled-components";

import { Label } from "../Label";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Label to display next to the checkbox.
   */
  label: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledCheckbox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0.125rem solid ${({ theme }) => theme.accents.border};
  margin-right: 0.625rem;
  accent-color: ${({ theme }) => theme.accents.primary.mid};
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
