import React from "react";

import { useTranslation } from "react-i18next";

import { useFooterComponent } from "./hooks";
import * as S from "./styled";

export const Footer = () => {
  const {
    models: { showRussianSwitch, showEnglishSwitch, showDutchSwitch },
    operations: { handleLanguageChange },
  } = useFooterComponent();
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Rights>{t("Rights info")}</S.Rights>
      <S.LanguageWrapper>
        {showDutchSwitch && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("nl")}>
            Nederlands
          </S.LanguageSwitch>
        )}
        {showEnglishSwitch && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("en")}>
            English
          </S.LanguageSwitch>
        )}
        {showRussianSwitch && (
          <S.LanguageSwitch onClick={() => handleLanguageChange("ru")}>
            Русский
          </S.LanguageSwitch>
        )}
      </S.LanguageWrapper>
    </S.Wrapper>
  );
};
