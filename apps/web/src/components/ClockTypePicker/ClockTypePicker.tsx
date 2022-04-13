import React, { useState } from "react";

import { ClockTypeEnum } from "@routine-support/domains";

import * as S from "./styled";

interface ClockTypePickerProps {
  value?: ClockTypeEnum;
  onChange: (value: ClockTypeEnum) => void;
}

export const ClockTypePicker: React.FC<ClockTypePickerProps> = ({
  value: defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue || ClockTypeEnum.Analog);

  const handleSelect = (value: ClockTypeEnum) => {
    setValue(value);
    onChange(value);
  };

  return (
    <S.Wrapper>
      <S.TypeWrapper
        isChecked={value === ClockTypeEnum.Analog}
        onClick={() => handleSelect(ClockTypeEnum.Analog)}
      >
        <S.TypeText>12:34</S.TypeText>
      </S.TypeWrapper>
      <S.TypeWrapper
        isChecked={value === ClockTypeEnum.Digital}
        onClick={() => handleSelect(ClockTypeEnum.Digital)}
      >
        <S.TypeIcon />
      </S.TypeWrapper>
    </S.Wrapper>
  );
};
