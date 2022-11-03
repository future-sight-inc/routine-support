import React from "react";

import { LanguageEnum } from "@routine-support/types";
import { useTranslation } from "react-i18next";

import { Select, SelectProps } from "../Select";

export const LanguageSelector: React.FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Select
      {...props}
      options={[
        { value: LanguageEnum.En, text: t("English") },
        { value: LanguageEnum.Nl, text: t("Nederlands") },
        { value: LanguageEnum.Ru, text: t("Русский") },
      ]}
    />
  );
};
