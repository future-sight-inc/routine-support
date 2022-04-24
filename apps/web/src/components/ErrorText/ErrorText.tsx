import React, { ReactNode } from "react";

import { useTranslation } from "react-i18next";

import * as S from "./styled";

interface ErrorTextProps {
  children: ReactNode;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.ErrorText>{t(String(children))}</S.ErrorText>
    </S.Wrapper>
  );
};
