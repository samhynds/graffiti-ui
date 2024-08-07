import { ReactNode } from "react";
import styled from "styled-components";
import { NavigationLink, type NavigationLinkProps } from "../Link";

export interface NavigationVerticalProps {
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

const StyledNavigationVertical = styled.div<
  Pick<NavigationVerticalProps, "$linkSize">
>`
  display: flex;
  flex-direction: column;
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

export const NavigationVertical = ({
  links,
  $linkSize = "md",
  className,
}: NavigationVerticalProps) => {
  return (
    <StyledNavigationVertical $linkSize={$linkSize} className={className}>
      {links.map((link, i) => {
        return <NavigationLink key={i} $linkSize={$linkSize} {...link} />;
      })}
    </StyledNavigationVertical>
  );
};
