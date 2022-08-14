import React from "react";

import { useTranslation } from "react-i18next";

import { Select } from "../Select";
import * as S from "./styled";

const LANGUAGES = [
  {
    text: "Nederlands",
    value: "nl-NL",
  },
  {
    text: "English",
    value: "en-EN",
  },
  {
    text: "Русский",
    value: "ru-RU",
  },
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <S.Wrapper>
      <Select
        options={LANGUAGES}
        onChange={handleChange}
        showBorder={false}
        menuPlacement="top"
        icon={<S.LanguageIcon />}
        value={i18n.language}
        InputElement={S.TextField}
      />
    </S.Wrapper>
  );
};
