import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";
import { PasswordDisplay } from "./components/PasswordDisplay";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background.gradient};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.base400};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.base400};
  width: min(450px, 100%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  //TODO add copy to clipboard (wrap everything in conditional based on password length > 0)
  const handleCopyPassword = () => {
    setIsPasswordCopied(true);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Wrapper>
          <StyledApp>
            <Header />
            <PasswordDisplay
              isCopied={isPasswordCopied}
              password={generatedPassword}
              onClick={handleCopyPassword}
            />
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
