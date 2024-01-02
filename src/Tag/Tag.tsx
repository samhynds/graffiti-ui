import styled from "styled-components";

export interface TagProps {
  /**
   * Text to display in the tag.
   */
  label: string;

  /**
   * The colour of the tag.
   */
  $color:
    | "aqua"
    | "grey"
    | "purple"
    | "green"
    | "red"
    | "pink"
    | "orange"
    | "yellow";
}

const StyledTag = styled.span<{ $color: TagProps["$color"] }>`
  padding: 0.125rem 0.375rem;
  border-radius: ${(props) => props.theme.borderRadius.standard};
  color: ${(props) => props.theme.colors[props.$color].dark};
  background: ${(props) => props.theme.colors[props.$color].light};
`;

/**
 * Tag
 */
export const Tag = ({ label, $color }: TagProps): JSX.Element => {
  return <StyledTag $color={$color}>{label}</StyledTag>;
};
