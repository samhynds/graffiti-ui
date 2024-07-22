import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Radio } from "../Radio";

export interface RadioGroupProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * An optional label to display before the radio options.
   */
  label?: string;

  /**
   * A list of strings reprenting each item in the radio group.
   */
  items: string[];

  /**
   * Identifier to tie the multiple radio buttons together.
   */
  groupName: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledRadioGroup = styled.fieldset<
  RadioGroupProps | HTMLAttributes<HTMLInputElement>
>`
  padding: 1rem;
  margin: 1rem 0;
  border: none;
`;

/**
 * A RadioGroup component for tying together multiple radio button options where
 * only one should be selected.
 */
export const RadioGroup = ({
  label,
  items,
  groupName,
  ...props
}: RadioGroupProps): JSX.Element => {
  return (
    <StyledRadioGroup {...props}>
      {label && <legend>{label}</legend>}
      {items.map((item, i) => (
        <Radio label={item} name={groupName} key={i} />
      ))}
    </StyledRadioGroup>
  );
};
