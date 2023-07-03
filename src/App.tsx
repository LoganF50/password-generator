import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { PasswordGenerator } from "./components/PasswordGenerator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.base500};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.base400};
  width: min(450px, 100%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: ${({ theme }) => theme.spacing.base600};
    width: min(550px, 100%);
  }
`;

function App() {
  const currentTheme = Themes.dark;
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  const handleCopyPassword = () => {
    if (generatedPassword.length > 0) {
      setIsPasswordCopied(true);
      navigator.clipboard.writeText(generatedPassword);
    }
  };

  const updateGeneratedPassword = (password: string) => {
    setGeneratedPassword(password);
    setIsPasswordCopied(false);
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
            <PasswordGenerator onClick={updateGeneratedPassword} />
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
