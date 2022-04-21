import React, { useState } from "react";

import { t } from "i18next";

import { Checkbox } from "../Checkbox/Checkbox";
import { ImportantFlagPickerLocators } from "./locators";
import * as S from "./styled";

interface ImportantFlagPickerProps {
  value?: boolean;
  onChange: (value: boolean) => void;
}

export const ImportantFlagPicker: React.FC<ImportantFlagPickerProps> = ({
  value,
  onChange,
}) => {
  const [checked, setChecked] = useState(Boolean(value));

  const handleToggle = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return (
    <S.Wrapper>
      <S.CheckboxWrapper data-testid={ImportantFlagPickerLocators.Checkbox}>
        <Checkbox
          value={checked}
          onChange={handleToggle}
          label={t("Important activity")}
          helperText={t("Important activity hint")}
        />
      </S.CheckboxWrapper>
      {checked && (
        <S.MessageWrapper>
          <S.Message data-testid={ImportantFlagPickerLocators.Message}>
            {t("Important activity active")}
          </S.Message>
        </S.MessageWrapper>
      )}
    </S.Wrapper>
  );
};
