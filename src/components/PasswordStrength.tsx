import styled from "styled-components";
import { Themes } from "../styles/themes";

const StyledPasswordStrength = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
  padding: ${({ theme }) => theme.spacing.base500};
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing.base600} ${theme.spacing.base700}`};
  }
`;

const StrengthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base400};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base400};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base600};
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base300};
`;

const BlankRating = styled.div`
  height: 1.8rem;
  width: 0.6rem;
  border: ${({ theme }) => `2px solid ${theme.color.text.primary}`};
`;
const Rating = styled.div<RatingProps>`
  height: 1.8rem;
  width: 0.6rem;
  border: ${({ strengthLevel, theme }) =>
    `2px solid ${
      strengthLevel === 1
        ? theme.color.states.red
        : strengthLevel === 2
        ? theme.color.states.orange
        : strengthLevel === 3
        ? theme.color.states.yellow
        : theme.color.accent
    }`};
  background-color: ${({ strengthLevel, theme }) =>
    strengthLevel === 1
      ? theme.color.states.red
      : strengthLevel === 2
      ? theme.color.states.orange
      : strengthLevel === 3
      ? theme.color.states.yellow
      : theme.color.accent};
`;

type RatingProps = {
  strengthLevel: number;
};

type PasswordStrengthProps = {
  strengthLevel: number;
};

const MAX_LEVEL = 4;
const STRENGTH_RATING = ["", "too weak!", "weak", "medium", "strong"];

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  strengthLevel,
}: PasswordStrengthProps) => {
  const filledRatings: React.ReactNode[] = [];
  const blankRatings: React.ReactNode[] = [];

  for (let i = 0; i < strengthLevel; i++) {
    filledRatings.push(<Rating strengthLevel={strengthLevel} />);
  }

  for (let i = strengthLevel; i < MAX_LEVEL; i++) {
    blankRatings.push(<BlankRating />);
  }

  return (
    <StyledPasswordStrength>
      <span>Strength</span>
      <StrengthContainer>
        <span>{STRENGTH_RATING[strengthLevel]}</span>
        <RatingContainer>
          {filledRatings}
          {blankRatings}
        </RatingContainer>
      </StrengthContainer>
    </StyledPasswordStrength>
  );
};
