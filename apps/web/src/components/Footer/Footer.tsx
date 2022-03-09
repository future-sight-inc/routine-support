import React from "react";

import { useTranslation } from "react-i18next";

import { useFooterComponent } from "./hooks";
import * as S from "./styled";

export const Footer = () => {
  const {
    models: { showRussianLink, showEnglishLink, showDutchLink },
    operations: { handleLanguageChange },
  } = useFooterComponent();
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Rights>{t("Rights info")}</S.Rights>
      <S.LanguageWrapper>
        {showDutchLink && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("nl")}>
            Nederlands
          </S.LanguageSwitch>
        )}
        {showEnglishLink && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("en")}>
            English
          </S.LanguageSwitch>
        )}
        {showRussianLink && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("ru")}>
            Русский
          </S.LanguageSwitch>
        )}
      </S.LanguageWrapper>
    </S.Wrapper>
  );
};
