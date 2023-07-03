import styled from "styled-components";
import { CopyIcon } from "./Icons";
import { MouseEventHandler } from "react";

const StyledPasswordDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.fontSize.base600};
  padding: ${({ theme }) => theme.spacing.base500};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base700};
    padding: ${({ theme }) => theme.spacing.base700};
  }
`;

const StyledPassword = styled.div<{ isEmpty: boolean }>`
  opacity: ${({ isEmpty }) => (isEmpty ? 0.25 : 1)};
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Copied = styled.div`
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.fontSize.base300};
  margin-left: auto;
  padding-left: ${({ theme }) => theme.spacing.base300};
  text-transform: uppercase;
`;

const CopyImageContainer = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.accent};
  padding-left: ${({ theme }) => theme.spacing.base300};

  svg {
    transform: scale(0.8);

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      transform: none;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

type PasswordDisplayProps = {
  isCopied: boolean;
  password: string;
  onClick: MouseEventHandler;
};

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  isCopied,
  password,
  onClick,
}: PasswordDisplayProps) => {
  const EMPTY_PASSWORD = "P4$5W0rD!";
  const isPasswordEmpty = password.length === 0;

  return (
    <StyledPasswordDisplay>
      <StyledPassword isEmpty={isPasswordEmpty}>
        {isPasswordEmpty ? EMPTY_PASSWORD : password}
      </StyledPassword>
      {isCopied && <Copied>Copied</Copied>}
      <CopyImageContainer onClick={onClick}>
        <CopyIcon />
      </CopyImageContainer>
    </StyledPasswordDisplay>
  );
};
