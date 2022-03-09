import React, { ReactNode } from "react";

import { useTranslation } from 'react-i18next';

import * as S from "./styled";

interface LayoutProps {
  addStudentButton: ReactNode;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  addStudentButton,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{t("Students")}</S.Title>
        {addStudentButton}
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
