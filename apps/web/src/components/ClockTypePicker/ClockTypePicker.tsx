import React from "react";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { ClockTypeEnum } from "@routine-support/domains";
import { useTranslation } from "react-i18next";

export const ClockTypePicker: React.FC<RadioGroupProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <RadioGroup {...props} defaultValue={ClockTypeEnum.Digital} row>
      <FormControlLabel
        value={ClockTypeEnum.Digital}
        control={<Radio />}
        label={t("Digital")}
      />
      <FormControlLabel
        value={ClockTypeEnum.Analog}
        control={<Radio />}
        label={t("Analog")}
      />
    </RadioGroup>
  );
};
