import styled from "styled-components";

export interface OverlayProps {
  $color?: "light" | "dark";

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledOverlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  background-color: ${(props) =>
    props.$color === "light"
      ? "rgba(255, 255, 255, 0.75)"
      : "rgba(0, 0, 0, 0.75)"};
  z-index: 100;
`;

export const Overlay = ({ $color = "light", className }: OverlayProps) => {
  return (
    <StyledOverlay
      $color={$color}
      data-testid="overlay"
      className={className}
    />
  );
};
