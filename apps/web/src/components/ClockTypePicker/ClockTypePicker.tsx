import React, { useState } from "react";

import { ClockTypeEnum } from "@routine-support/domains";
import { useTranslation } from "react-i18next";

import analogIcon from "./analog.png";
import digitalIcon from "./digital.png";
import * as S from "./styled";

interface ClockTypePickerProps {
  value: ClockTypeEnum;
  onChange: (value: ClockTypeEnum) => void;
}

export const ClockTypePicker: React.FC<ClockTypePickerProps> = ({
  value: defaultValue,
  onChange,
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(defaultValue || ClockTypeEnum.Analog);

  const handleSelect = (value: ClockTypeEnum) => {
    setValue(value);
    onChange(value);
  };

  return (
    <S.Wrapper>
      <S.LabelWrapper
        isChecked={value === ClockTypeEnum.Analog}
        onClick={() => handleSelect(ClockTypeEnum.Analog)}
      >
        <S.LabelText>{t("Digital")}</S.LabelText>
        <S.LabelIcon src={digitalIcon} />
      </S.LabelWrapper>
      <S.LabelWrapper
        isChecked={value === ClockTypeEnum.Digital}
        onClick={() => handleSelect(ClockTypeEnum.Digital)}
      >
        <S.LabelText>{t("Analog")}</S.LabelText>
        <S.LabelIcon src={analogIcon} />
      </S.LabelWrapper>
    </S.Wrapper>
  );
};
