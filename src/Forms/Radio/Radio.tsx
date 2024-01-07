import { HTMLAttributes } from "react";
import styled from "styled-components";

import { Label } from "../Label";

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Label to display next to the radio button.
   */
  label: string;
}

const StyledRadio = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.colors.white};
  margin-right: 0.625rem;
  accent-color: ${(props) => props.theme.colors.primary.mid};
`;

/**
 * A single radio button, can be grouped with others using a RadioGroup
 * component.
 */
export const Radio = ({ label, ...props }: RadioProps): JSX.Element => {
  return (
    <>
      <Label $layout="row">
        <StyledRadio type="Radio" {...props} />
        {label}
      </Label>
    </>
  );
};
