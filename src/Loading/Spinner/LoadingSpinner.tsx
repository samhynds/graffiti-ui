import styled from "styled-components";

export interface LoadingSpinnerProps {
  $size?: string;
  $ringWidth?: string;
  $ringColor?: string;
  $arcColor?: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledLoadingSpinner = styled.div<LoadingSpinnerProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: ${({ theme, $ringWidth, $ringColor }) =>
    `${$ringWidth} solid ${$ringColor || theme.accents.primary.light}`};
  border-bottom-color: ${({ theme, $arcColor }) =>
    $arcColor || theme.accents.primary.mid};
  border-radius: 50%;
  display: inline-flex;
  box-sizing: border-box;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpinner = ({
  $size = "3rem",
  $ringWidth = "0.25rem",
  $ringColor,
  $arcColor,
  className,
}: LoadingSpinnerProps) => {
  return (
    <StyledLoadingSpinner
      data-testid="loading-spinner"
      $size={$size}
      $ringWidth={$ringWidth}
      $ringColor={$ringColor}
      $arcColor={$arcColor}
      className={className}
    />
  );
};
