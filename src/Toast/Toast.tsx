import styled from "styled-components";

import { Button } from "../Button";

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
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey.light};
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
  color: ${(props) => props.theme.colors.grey.xdark};
  padding-right: 2rem;
  margin-bottom: 0.5rem;
`;

const StyledToastDescription = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey.dark};
`;

const StyledToastButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 0.75rem;
`;

export const Toast = (props: ToastProps) => {
  return (
    <StyledToast>
      <StyledToastTitle>{props.title}</StyledToastTitle>
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
