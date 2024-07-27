import styled from "styled-components";

export interface TagProps {
  /**
   * Text to display in the tag.
   */
  label: string;

  /**
   * The colour of the tag. Should match a colour from the theme.
   */
  $color:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledTag = styled.span<{ $color: TagProps["$color"] }>`
  padding: 0.125rem 0.375rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ $color, theme }) => theme.colors[$color][800]};
  background: ${({ $color, theme }) => theme.colors[$color][200]};
`;

/**
 * An inline component to highlight a piece of text.
 */
export const Tag = ({ label, $color, className }: TagProps): JSX.Element => {
  return (
    <StyledTag $color={$color} className={className}>
      {label}
    </StyledTag>
  );
};
