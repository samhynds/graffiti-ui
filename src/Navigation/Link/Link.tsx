import { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface NavigationLinkProps {
  text: string;
  $linkSize?: "sm" | "md" | "lg";
  icon?: ReactNode;
  to: string;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledNavigationLink = styled(Link)<
  Pick<NavigationLinkProps, "$linkSize">
>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  ${({ $linkSize }) => {
    switch ($linkSize) {
      case "sm":
        return `
          font-size: 0.8rem;
          gap: 0.35rem;
          padding: 0.25rem 0.5rem;

        svg {
          font-size: 0.9rem;
        }
        `;
      case "md":
        return `
        font-size: 1rem;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;

        svg {
          font-size: 1.1rem;
        }
      `;
      case "lg":
        return `
        font-size: 1.125rem;
        gap: 0.6rem;
        padding: 0.35rem 0.75rem;

        svg {
          font-size: 1.4rem;
        }
      `;
      default:
        return `
          font-size: 1rem;
          gap: 0.5rem;
          padding: 0.25rem 0.5rem;

          svg {
            font-size: 1.1rem;
          }
        `;
    }
  }};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey.xdark};
  border-radius: 0.75rem;

  transition: all 200ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.link.bg};
    color: ${({ theme }) => theme.colors.link.text};
  }
`;

export const NavigationLink = ({
  text,
  icon,
  $linkSize,
  to,
  className,
}: NavigationLinkProps) => {
  return (
    <StyledNavigationLink $linkSize={$linkSize} to={to} className={className}>
      {icon}
      {text}
    </StyledNavigationLink>
  );
};
