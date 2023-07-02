import { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledSlider = styled.input`
  appearance: none;
  height: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.color.slider.background.empty};
  background-image: ${({ theme }) => theme.color.slider.background.full};
  background-repeat: no-repeat;

  &::-moz-range-thumb {
    appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border: ${({ theme }) =>
      `2px solid ${theme.color.slider.thumb.background}`};
    border-radius: ${({ theme }) => theme.borderRadius.circular};
    background: ${({ theme }) => theme.color.slider.thumb.background};
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border: ${({ theme }) =>
      `2px solid ${theme.color.slider.thumb.background}`};
    border-radius: ${({ theme }) => theme.borderRadius.circular};
    background: ${({ theme }) => theme.color.slider.thumb.background};
    cursor: pointer;
  }

  &::-moz-range-track {
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-webkit-slider-runnable-track {
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-thumb:hover {
    border: ${({ theme }) => `2px solid ${theme.color.slider.thumb.accent}`};
    background: ${({ theme }) => theme.color.slider.thumb.hover};
  }

  &::-webkit-slider-thumb:hover {
    border: ${({ theme }) => `2px solid ${theme.color.slider.thumb.accent}`};
    background: ${({ theme }) => theme.color.slider.thumb.hover};
  }

  &::-moz-range-thumb:active {
    cursor: grabbing;
  }

  &::-webkit-slider-thumb:active {
    cursor: grabbing;
  }
`;

type SliderProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
}: SliderProps) => {
  const getBackgroundSize = () => {
    return {
      //max coverage = 99 prevents bar showing behind thumb when full
      backgroundSize: `${(value * 99) / max}% 100%`,
    };
  };

  return (
    <StyledSlider
      type="range"
      name={label}
      id={label}
      aria-labelledby={label}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      style={getBackgroundSize()}
    />
  );
};
