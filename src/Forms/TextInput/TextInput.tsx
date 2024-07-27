import { InputHTMLAttributes } from "react";
import styled from "styled-components";

import { Label } from "../Label";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label to display above the text input.
   */
  label?: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledTextInput = styled.input<TextInputProps>`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.accents.text};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0.125rem solid ${({ theme }) => theme.accents.border};
  margin-top: 0.5rem;

  &:focus {
    border-color: ${({ theme }) => theme.accents.primary.mid};
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
