import styled from "styled-components";
import { X } from "@phosphor-icons/react";

import { Overlay } from "../Overlay";
import { Button } from "../Button/Standard";

export interface ModalProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  buttons?: {
    text: string;
    isPrimary?: boolean;
    onClick: () => void;
  }[];
  hasOverlay?: boolean;
}

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.accents.border};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 2rem 2.25rem;
  width: 28rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 150;
`;

const StyledModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledModalTitle = styled.h3`
  color: ${({ theme }) => theme.accents.heading};
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
`;

const StyledToastSubtitle = styled.div`
  color: ${({ theme }) => theme.accents.text};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 0.75rem;
`;

const StyledModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accents.text};
  position: absolute;
  top: 1.125rem;
  right: 1.125rem;
`;

export const Modal = ({
  title,
  subtitle,
  hasOverlay = true,
  buttons,
  children,
}: ModalProps) => {
  return (
    <>
      {hasOverlay && <Overlay />}
      <StyledModal>
        <StyledModalHeader>
          {title && <StyledModalTitle>{title}</StyledModalTitle>}
          <StyledModalCloseButton>
            <X size={20} />
          </StyledModalCloseButton>
        </StyledModalHeader>
        {subtitle && <StyledToastSubtitle>{subtitle}</StyledToastSubtitle>}
        {children}
        {buttons && (
          <ModalButtonWrapper>
            {buttons.map((button) => (
              <Button
                label={button.text}
                $primary={button.isPrimary || false}
                key={button.text}
                onClick={button.onClick}
              />
            ))}
          </ModalButtonWrapper>
        )}
      </StyledModal>
    </>
  );
};
