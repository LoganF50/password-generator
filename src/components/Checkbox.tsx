import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { CheckIcon } from "./Icons";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const IconContainer = styled.div`
  display: grid;
  place-items: center;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.div<StyleProps>`
  display: grid;
  place-items: center;
  width: 1.2rem;
  height: 1.2rem;
  background: ${({ isChecked, theme }) =>
    isChecked
      ? theme.color.checkbox.background.checked
      : theme.color.checkbox.background.unchecked};
  border: ${({ isChecked, theme }) =>
    `2px solid ${
      isChecked
        ? theme.color.checkbox.border.checked
        : theme.color.checkbox.border.unchecked
    }`};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    border: ${({ theme }) =>
      `2px solid ${theme.color.checkbox.border.checked}`};
    box-shadow: ${({ theme }) =>
      `0 0 0 3px ${theme.color.checkbox.border.checked}`};
  }

  ${IconContainer} {
    visibility: ${({ isChecked }) => (isChecked ? "visible" : "hidden")};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base500};

  &:hover {
    cursor: pointer;
  }
`;

type StyleProps = {
  isChecked: boolean;
};

type CheckboxProps = StyleProps & {
  label: string;
  onChange: ChangeEventHandler;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  label,
  onChange,
}: CheckboxProps) => {
  return (
    <div>
      <StyledLabel>
        <CheckboxContainer>
          <HiddenCheckbox checked={isChecked} onChange={onChange} />
          <StyledCheckbox isChecked={isChecked}>
            <IconContainer>
              <CheckIcon />
            </IconContainer>
          </StyledCheckbox>
        </CheckboxContainer>
        <span>{label}</span>
      </StyledLabel>
    </div>
  );
};
