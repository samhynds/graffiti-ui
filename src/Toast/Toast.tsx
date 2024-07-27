import styled from "styled-components";
import { X } from "@phosphor-icons/react";

import { Button } from "../Button/Standard";

export interface ToastProps {
  title: string;
  description?: string;
  buttons?: {
    text: string;
    isPrimary?: boolean;
    onClick: () => void;
  }[];
}

const StyledToast = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.accents.border};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 1rem;
  max-width: 24rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledToastTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accents.heading};
  padding-right: 2rem;
`;

const StyledToastDescription = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.accents.text};
`;

const StyledToastButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 0.75rem;
`;

const StyledToastCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accents.text};
`;

const StyledToastHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Toast = (props: ToastProps) => {
  return (
    <StyledToast>
      <StyledToastHeader>
        <StyledToastTitle>{props.title}</StyledToastTitle>
        <StyledToastCloseButton>
          <X size={20} />
        </StyledToastCloseButton>
      </StyledToastHeader>
      {props.description && (
        <StyledToastDescription>{props.description}</StyledToastDescription>
      )}
      {props.buttons && (
        <StyledToastButtonWrapper>
          {props.buttons.map((button) => (
            <Button
              label={button.text}
              $primary={button.isPrimary || false}
              size="small"
              key={button.text}
              onClick={button.onClick}
            />
          ))}
        </StyledToastButtonWrapper>
      )}
    </StyledToast>
  );
};
