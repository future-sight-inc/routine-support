import React from "react";

import { MenuItem, SelectProps } from "@mui/material";
import { RepeatTypeEnum } from "@routine-support/domains";
import { useTranslation } from 'react-i18next';

import { Select } from "../Select";

export const RepeatTypePicker: React.FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <Select {...props} defaultValue={RepeatTypeEnum.None}>
      <MenuItem value={RepeatTypeEnum.None}>{t("Never")}</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryDay}>{t("Every day")}</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryWeek}>{t("Every week")}</MenuItem>
      <MenuItem value={RepeatTypeEnum.EveryMonth}>{t("Every month")}</MenuItem>
    </Select>
  );
};
