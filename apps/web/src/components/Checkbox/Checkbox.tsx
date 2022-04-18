import React, { useState } from "react";

import { TypographyVariant } from "../../styled/components/Typography";
import { LabelWithHelper } from "../LabelWithHelper";
import { CheckboxLocators } from "./locators";
import * as S from "./styled";

interface CheckboxProps {
  label: string;
  helperText?: string;
  value?: boolean;
  onChange: (value: boolean) => void;
  labelVariant?: TypographyVariant;
  color?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  value,
  onChange,
  labelVariant,
  color,
}) => {
  const [checked, setChecked] = useState(value ?? false);

  const handleToggle = () => {
    setChecked((checked) => {
      onChange(!checked);

      return !checked;
    });
  };

  return (
    <S.Wrapper
      onClick={handleToggle}
      data-testid={CheckboxLocators.Wrapper}
      color={color}
    >
      {checked ? (
        <S.CheckIcon data-testid={CheckboxLocators.CheckedIcon} />
      ) : (
        <S.EmptyIcon data-testid={CheckboxLocators.EmptyIcon} />
      )}
      <LabelWithHelper
        helperText={helperText}
        color="normal"
        variant={labelVariant}
      >
        {label}
      </LabelWithHelper>
    </S.Wrapper>
  );
};
