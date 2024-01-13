import { useState } from "react";
import styled from "styled-components";
import { CaretDown } from "@phosphor-icons/react";

import { Label } from "../Label";
import { Radio } from "../Radio";

export interface DropdownProps {
  /**
   * The label to show above the dropdown.
   */
  label: string;

  /**
   * The label and value for each item in the dropdown list.
   */
  items: {
    label: string;
    value: string;
  }[];
}

interface DropdownActiveProps {
  /**
   * Are the dropbown items shown?
   */
  $isActive: boolean;
}

const StyledDropdownWrapper = styled.div<DropdownActiveProps>`
  margin-top: 0.5rem;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  transition: box-shadow 200ms ease-out;

  ${(props) =>
    props.$isActive && "box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.1);"}
`;

const StyledDropdownButton = styled.button<DropdownActiveProps>`
  font-size: 1rem;
  min-width: 20rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey.dark};
  border-radius: ${(props) => props.theme.borderRadius.standard};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 200;

  border-radius: ${(props) => props.theme.borderRadius.standard};
  border: 1px solid ${(props) => props.theme.colors.grey.light};

  ${(props) => {
    if (props.$isActive) {
      return `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `;
    }
  }}
`;

const StyledDropdownButtonArrow = styled.div<DropdownActiveProps>`
  transition: transform 200ms ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${(props) => {
    if (props.$isActive) {
      return `
        transform: rotate(180deg);
      `;
    } else {
      return "transform: rotate(0);";
    }
  }}
`;

const StyledDropdownItems = styled.div<DropdownActiveProps>`
  overflow: hidden;
  transition: max-height 200ms ease-out, box-shadow 200ms ease-out;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  max-height: 0;
  position: absolute;
  z-index: 175;

  ${(props) => {
    if (props.$isActive) {
      return `
        box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.1);
        max-height: 30rem;
        overflow-y: scroll;
        border: 1px solid ${props.theme.colors.grey.light};
        border-top: none;
        border-bottom-left-radius: ${props.theme.borderRadius.standard};
        border-bottom-right-radius: ${props.theme.borderRadius.standard};
  `;
    }
  }}

  label {
    padding: 0 1rem;
    height: 2.5rem;
    margin-bottom: 0;
    font-weight: 400;

    &:last-child {
      border-bottom-right-radius: ${(props) =>
        props.theme.borderRadius.standard};
      border-bottom-left-radius: ${(props) =>
        props.theme.borderRadius.standard};
    }

    &:hover {
      background: ${(props) => props.theme.colors.primary.mid};
      color: ${(props) => props.theme.colors.white};
    }
  }

  input {
    display: none;
  }
`;

/**
 * A dropdown/select form element for selecting a single item from a list of
 * items.
 */
export const Dropdown = ({ label, items }: DropdownProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Label data-testid="dropdown">
        {label}
        <StyledDropdownWrapper $isActive={isActive}>
          <StyledDropdownButton onClick={handleClick} $isActive={isActive}>
            {items[0].label}
            <StyledDropdownButtonArrow $isActive={isActive}>
              <CaretDown />
            </StyledDropdownButtonArrow>
          </StyledDropdownButton>
          <StyledDropdownItems $isActive={isActive}>
            {items.map((item, i) => {
              return <Radio label={item.label} name={item.value} key={i} />;
            })}
          </StyledDropdownItems>
        </StyledDropdownWrapper>
      </Label>
    </>
  );
};
