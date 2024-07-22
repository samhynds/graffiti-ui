import styled from "styled-components";

export interface FormWrapperProps {
  children: React.ReactNode;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledFormWrapper = styled.form`
  input {
    margin-bottom: 1rem;
  }
`;

export const FormWrapper = ({ children, className }: FormWrapperProps) => {
  return (
    <StyledFormWrapper data-testid="form-wrapper" className={className}>
      {children}
    </StyledFormWrapper>
  );
};
