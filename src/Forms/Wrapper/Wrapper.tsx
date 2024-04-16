import styled from "styled-components";

export interface FormWrapperProps {
  children: React.ReactNode;
}

const StyledFormWrapper = styled.form`
  input {
    margin-bottom: 1rem;
  }
`;

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <StyledFormWrapper data-testid="form-wrapper">{children}</StyledFormWrapper>
  );
};
