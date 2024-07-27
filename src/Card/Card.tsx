import { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps {
  /**
   * The content of the Card.
   */
  children: ReactNode;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.accents.border};
  border-radius: 0.25rem;
  padding: 2rem 2.25rem;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }
`;

export const Card = ({ children, className }: CardProps) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
