import React, { useState } from "react";

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
          label="Is important"
          helperText="Some text about importance"
        />
      </S.CheckboxWrapper>
      {checked && (
        <S.MessageWrapper>
          <S.Message data-testid={ImportantFlagPickerLocators.Message}>
            Данная активность будет отображаться в наивысшем приоритете
          </S.Message>
        </S.MessageWrapper>
      )}
    </S.Wrapper>
  );
};
