import { ReactNode } from "react";
import styled from "styled-components";

export interface ContainerProps {
  /**
   * The content of the Container.
   */
  children: ReactNode;

  /**
   * The width of the Container.
   */
  $width: "full" | "1800px" | "1200px" | "800px" | "600px" | "300px";

  /**
   * Which side the content inside the container should be aligned to.
   */
  $alignment: "start" | "center" | "end";

  /**
   * The direction of the content inside the container.
   */
  $flexDirection: "column" | "row";
}

const StyledContainer = styled.div<
  Pick<ContainerProps, "$alignment" | "$flexDirection">
>`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$alignment};
`;

// Add breakpoints for screen sizes
const StyledInnerContainer = styled.div<Pick<ContainerProps, "$width">>`
  width: ${(props) => props.$width};
`;

export const Container = ({
  $width,
  $alignment,
  $flexDirection,
  children,
}: ContainerProps) => {
  return (
    <StyledContainer $alignment={$alignment} $flexDirection={$flexDirection}>
      <StyledInnerContainer $width={$width}>{children}</StyledInnerContainer>
    </StyledContainer>
  );
};
