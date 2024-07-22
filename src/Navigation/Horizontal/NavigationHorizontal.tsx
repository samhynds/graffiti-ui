import { ReactNode } from "react";
import styled from "styled-components";
import { NavigationLink, type NavigationLinkProps } from "../Link";

export interface NavigationHorizontalProps {
  links: {
    text: string;
    to: string;
    icon?: ReactNode;
  }[];

  $linkSize?: NavigationLinkProps["$linkSize"];

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledNavigationHorizontal = styled.div<
  Pick<NavigationHorizontalProps, "$linkSize">
>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${({ $linkSize }) => {
    switch ($linkSize) {
      case "sm":
        return `
          gap: 0.25rem;
        `;

      case "md":
        return `
          gap: 0.75rem;
        `;

      case "lg":
        return `
          gap: 1rem;
        `;

      default:
        return `
            gap: 0.75rem;
          `;
    }
  }};
`;

export const NavigationHorizontal = ({
  links,
  $linkSize,
  className,
}: NavigationHorizontalProps) => {
  return (
    <StyledNavigationHorizontal $linkSize={$linkSize} className={className}>
      {links.map((link) => {
        return <NavigationLink $linkSize={$linkSize} {...link} />;
      })}
    </StyledNavigationHorizontal>
  );
};
