import React, { useState } from "react";

import { ColorEnum } from "@routine-support/domains";
import { COLORS } from "@routine-support/ui-theme";

import { createActiveColorDataTestId, createColorDataTestId } from "./locators";
import * as S from "./styled";

interface ColorPickerProps {
  value?: ColorEnum;
  onChange: (value: ColorEnum) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
}) => {
  const [activeColor, setActiveColor] = useState<ColorEnum>(
    value ?? ColorEnum.Purple
  );

  const handleChange = (value: ColorEnum) => {
    setActiveColor(value);
    onChange(value);
  };

  return (
    <S.Wrapper>
      {COLORS.map((color, index) => (
        <S.Color
          key={index}
          color={color.color}
          isActive={color.value === activeColor}
          onClick={() => handleChange(color.value)}
          data-testid={
            color.value === activeColor
              ? createActiveColorDataTestId(color.value)
              : createColorDataTestId(color.value)
          }
        />
      ))}
    </S.Wrapper>
  );
};
