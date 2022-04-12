import React from "react";

import { LanguageEnum } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import { Select, SelectProps } from "../Select";

export const LanguagePicker: React.FC<SelectProps> = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Select
      {...props}
      defaultValue={i18n.language}
      options={[
        { value: LanguageEnum.En, text: t("English") },
        { value: LanguageEnum.Nl, text: t("Nederlands") },
        { value: LanguageEnum.Ru, text: t("Русский") },
      ]}
    />
  );
};
