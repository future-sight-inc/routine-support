import React, { useState } from "react";

import { CheckboxLocators } from "./locators";
import * as S from "./styled";

interface CheckboxProps {
  label: string;
  helperText?: string;
  value?: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  value,
  onChange,
}) => {
  const [checked, setChecked] = useState(value ?? false);

  const handleToggle = () => {
    setChecked((checked) => {
      onChange(!checked);

      return !checked;
    });
  };

  return (
    <S.Wrapper onClick={handleToggle} data-testid={CheckboxLocators.Wrapper}>
      {checked ? (
        <S.CheckIcon data-testid={CheckboxLocators.CheckedIcon} />
      ) : (
        <S.EmptyIcon data-testid={CheckboxLocators.EmptyIcon} />
      )}
      <S.Label helperText={helperText}>{label}</S.Label>
    </S.Wrapper>
  );
};
