import React from "react";

import { useTranslation } from "react-i18next";

import { LanguageSelector } from "../LanguageSelector";
import * as S from "./styled";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Rights>{t("Rights info")}</S.Rights>
      <S.LanguageSelectorWrapper>
        <LanguageSelector />
      </S.LanguageSelectorWrapper>
    </S.Wrapper>
  );
};
