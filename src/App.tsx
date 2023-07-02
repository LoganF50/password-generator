import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Wrapper>
          <StyledApp></StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
