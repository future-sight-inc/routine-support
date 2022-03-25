import React from "react";

import { MenuItem, SelectProps } from "@mui/material";
import { LanguageEnum } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import { Select } from "../Select";

export const LanguagePicker: React.FC<SelectProps> = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Select {...props} defaultValue={i18n.language}>
      <MenuItem value={LanguageEnum.En}>{t("English")}</MenuItem>
      <MenuItem value={LanguageEnum.Nl}>{t("Nederlands")}</MenuItem>
      <MenuItem value={LanguageEnum.Ru}>{t("Русский")}</MenuItem>
    </Select>
  );
};
