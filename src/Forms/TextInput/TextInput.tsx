import { HTMLAttributes } from "react";
import styled from "styled-components";

import { Label } from "../Label";

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Label to display above the text input.
   */
  label?: string;
}

const StyledTextInput = styled.input<TextInputProps>`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.colors.grey.dark};
  border-radius: ${(props) => props.theme.borderRadius.standard};
  border: 0.125rem solid ${(props) => props.theme.colors.grey.light};
  margin-top: 0.5rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.blue.mid};
  }
`;

/**
 * A standard TextInput - a one-line input used for general text, emails,
 * passwords etc. Can also be given a label.
 */
export const TextInput = ({ label, ...props }: TextInputProps): JSX.Element => {
  return (
    <>
      {label ? (
        <Label>
          {label} <StyledTextInput {...props} />
        </Label>
      ) : (
        <StyledTextInput {...props} />
      )}
    </>
  );
};
