import { useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";
import { PasswordStrength } from "./PasswordStrength";
import { ArrowRightIcon } from "./Icons";

const StyledPasswordGenerator = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base600};
  background-color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.fontSize.base300};
  padding: ${({ theme }) => theme.spacing.base500};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.base600};
    background-color: ${({ theme }) => theme.color.button.background};
    border: ${({ theme }) => `2px solid ${theme.color.button.border}`};
    color: ${({ theme }) => theme.color.button.text};
    padding: ${({ theme }) => theme.spacing.base600};
    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.color.button.hover.background};
      border: ${({ theme }) => `2px solid ${theme.color.button.hover.border}`};
      color: ${({ theme }) => theme.color.button.hover.text};
      cursor: pointer;
    }
  }
`;

const FlexRowSplit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccentDiv = styled.div`
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.fontSize.base600};
`;

const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base500};
  padding: ${({ theme }) => `${theme.spacing.base600} 0`};
`;

type PasswordGeneratorProps = {
  onClick: (password: string) => void;
};

export const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({
  onClick,
}: PasswordGeneratorProps) => {
  const MAX_PW_LENGTH = 20;
  const [characterLength, setCharacterLength] = useState(0);
  const [rating, setRating] = useState(0);
  const [shouldIncludeUppercase, setShouldIncludeUppercase] = useState(false);
  const [shouldIncludeLowercase, setShouldIncludeLowercase] = useState(false);
  const [shouldIncludeNumbers, setShouldIncludeNumbers] = useState(false);
  const [shouldIncludeSymbols, setShouldIncludeSymbols] = useState(false);

  //TODO
  const generatePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    if (shouldGeneratePassword()) {
      let password = "";
      let letterBank = "";
      //add chars to letter bank
      if (shouldIncludeLowercase) {
        letterBank += lowercaseLetters;
      }

      if (shouldIncludeUppercase) {
        letterBank += uppercaseLetters;
      }

      if (shouldIncludeNumbers) {
        letterBank += numbers;
      }

      if (shouldIncludeSymbols) {
        letterBank += symbols;
      }

      //create password
      for (let i = 0; i < characterLength; i++) {
        const randomCharIndex = Math.floor(Math.random() * letterBank.length);
        password += letterBank[randomCharIndex];
      }
      setRating(getStrengthLevel());
      onClick(password);
    }
  };

  //TODO
  const getStrengthLevel = () => {
    let level = 0;
    let lengthAdjustment = 0;

    if (characterLength > 14) {
      lengthAdjustment = 1.75;
    } else if (characterLength > 11) {
      lengthAdjustment = 1;
    } else if (characterLength < 8) {
      lengthAdjustment = -2;
    } else {
      lengthAdjustment = 0;
    }
    const lowerLetterAdjustment = shouldIncludeLowercase ? 0.75 : 0;
    const upperLetterAdjustment = shouldIncludeUppercase ? 0.75 : 0;
    const numberAdjustment = shouldIncludeNumbers ? 0.75 : 0;
    const symbolAdjustment = shouldIncludeSymbols ? 0.75 : 0;

    level +=
      lengthAdjustment +
      lowerLetterAdjustment +
      upperLetterAdjustment +
      numberAdjustment +
      symbolAdjustment;

    console.log(level);
    return Math.min(Math.max(Math.round(level), 1), 4);
  };

  // must have 1+ characters and include 1+ category
  const shouldGeneratePassword = () => {
    return (
      characterLength > 0 &&
      (shouldIncludeUppercase ||
        shouldIncludeLowercase ||
        shouldIncludeNumbers ||
        shouldIncludeSymbols)
    );
  };

  return (
    <StyledPasswordGenerator>
      <FlexRowSplit>
        <div>Character Length</div>
        <AccentDiv>{characterLength}</AccentDiv>
      </FlexRowSplit>
      <Slider
        label={"charLength"}
        min={0}
        max={MAX_PW_LENGTH}
        value={characterLength}
        onChange={(e) => setCharacterLength(Number(e.target.value))}
      />
      <OptionSection>
        <Checkbox
          isChecked={shouldIncludeUppercase}
          label={"Include Uppercase Letters"}
          onChange={() => setShouldIncludeUppercase(!shouldIncludeUppercase)}
        />
        <Checkbox
          isChecked={shouldIncludeLowercase}
          label={"Include Lowercase Letters"}
          onChange={() => setShouldIncludeLowercase(!shouldIncludeLowercase)}
        />
        <Checkbox
          isChecked={shouldIncludeNumbers}
          label={"Include Numbers"}
          onChange={() => setShouldIncludeNumbers(!shouldIncludeNumbers)}
        />
        <Checkbox
          isChecked={shouldIncludeSymbols}
          label={"Include Symbols"}
          onChange={() => setShouldIncludeSymbols(!shouldIncludeSymbols)}
        />
      </OptionSection>
      <PasswordStrength strengthLevel={rating} />
      <button onClick={generatePassword}>
        <span>generate</span>
        <ArrowRightIcon />
      </button>
    </StyledPasswordGenerator>
  );
};
