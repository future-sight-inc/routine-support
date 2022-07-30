import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { CommonFlagPickerLocators, createActiveButtonDataTestId } from "./locators";
import * as S from "./styled";

interface CommonFlagPickerProps {
  value?: boolean;
  onChange: (value: boolean) => void;
}

export const CommonFlagPicker: React.FC<CommonFlagPickerProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const [isCommon, setIsCommon] = useState(value ?? true);

  const handleChange = (value: boolean) => {
    setIsCommon(value);
    onChange(value);
  };

  return (
    <S.Wrapper>
      <S.Button
        onClick={() => handleChange(true)}
        isActive={isCommon}
        data-testid={
          isCommon
            ? createActiveButtonDataTestId(CommonFlagPickerLocators.Common)
            : CommonFlagPickerLocators.Common
        }
      >
        {t("Common activity")}
      </S.Button>
      <S.Button
        onClick={() => handleChange(false)}
        isActive={!isCommon}
        data-testid={
          !isCommon
            ? createActiveButtonDataTestId(CommonFlagPickerLocators.Individual)
            : CommonFlagPickerLocators.Individual
        }
      >
        {t("Individual activity short")}
      </S.Button>
    </S.Wrapper>
  );
};
