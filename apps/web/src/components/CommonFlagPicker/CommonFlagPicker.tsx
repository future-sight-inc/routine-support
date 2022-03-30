import React from "react";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const CommonFlagPicker: React.FC<RadioGroupProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <RadioGroup {...props} defaultValue={true} row>
      <FormControlLabel value={true} control={<Radio />} label={t("Common")} />
      <FormControlLabel
        value={false}
        control={<Radio />}
        label={t("Individual")}
      />
    </RadioGroup>
  );
};
