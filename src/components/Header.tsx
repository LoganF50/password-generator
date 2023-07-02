import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.base300};
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Password Generator</h1>
    </StyledHeader>
  );
};
