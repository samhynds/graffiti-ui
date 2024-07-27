import { useState, MouseEvent } from "react";
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
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  transition: box-shadow 200ms ease-out;

  ${({ $isActive }) =>
    $isActive && "box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.1);"}
`;

const StyledDropdownButton = styled.button<DropdownActiveProps>`
  font-size: 1rem;
  min-width: 20rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.accents.text};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 200;

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.accents.border};

  ${({ $isActive }) => {
    if ($isActive) {
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

  ${({ $isActive }) => {
    if ($isActive) {
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
  transition:
    max-height 200ms ease-out,
    box-shadow 200ms ease-out;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-height: 0;
  position: absolute;
  z-index: 175;

  ${({ theme, $isActive }) => {
    if ($isActive) {
      return `
        box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.1);
        max-height: 30rem;
        overflow-y: scroll;
        border: 1px solid ${theme.accents.border};
        border-top: none;
        border-bottom-left-radius: ${theme.borderRadius.md};
        border-bottom-right-radius: ${theme.borderRadius.md};
  `;
    }
  }}

  label {
    padding: 0 1rem;
    height: 2.5rem;
    margin-bottom: 0;
    font-weight: 400;

    &:last-child {
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md};
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
    }

    &:hover {
      background: ${({ theme }) => theme.accents.primary.mid};
      color: ${({ theme }) => theme.colors.white};
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
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  const handleSelectItem = (e: MouseEvent<HTMLInputElement>) => {
    const selectedItem = items.find(
      (item) => item.value === (e.target as HTMLInputElement).name
    )!;
    setSelectedItem(selectedItem);
    setIsActive(false);
  };

  return (
    <>
      <Label data-testid="dropdown">
        {label}
        <StyledDropdownWrapper $isActive={isActive}>
          <StyledDropdownButton onClick={handleIsActive} $isActive={isActive}>
            {selectedItem.label}
            <StyledDropdownButtonArrow $isActive={isActive}>
              <CaretDown />
            </StyledDropdownButtonArrow>
          </StyledDropdownButton>
          <StyledDropdownItems $isActive={isActive}>
            {items.map((item, i) => {
              return (
                <Radio
                  label={item.label}
                  name={item.value}
                  key={i}
                  onClick={handleSelectItem}
                />
              );
            })}
          </StyledDropdownItems>
        </StyledDropdownWrapper>
      </Label>
    </>
  );
};
