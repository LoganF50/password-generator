import { useState } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";

const StyledPasswordGenerator = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base600};
  background-color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.fontSize.base300};
  padding: ${({ theme }) => theme.spacing.base500};
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
  const [shouldIncludeUppercase, setShouldIncludeUppercase] = useState(false);
  const [shouldIncludeLowercase, setShouldIncludeLowercase] = useState(false);
  const [shouldIncludeNumbers, setShouldIncludeNumbers] = useState(false);
  const [shouldIncludeSymbols, setShouldIncludeSymbols] = useState(false);

  //TODO
  const generatePassword = () => {
    let password = "test";
    onClick(password);
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
      <div>STRENGTH PLACEHOLDER</div>
      <button onClick={generatePassword}>Generate</button>
    </StyledPasswordGenerator>
  );
};
