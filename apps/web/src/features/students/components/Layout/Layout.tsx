import React, { ReactNode } from "react";

import * as S from "./styled";

interface LayoutProps {
  addStudentButton: ReactNode;
  children: ReactNode;
  loading: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  addStudentButton,
  children,
  loading,
}) => {
  if (loading) {
    return <S.Spinner />;
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Студенты</S.Title>
        {addStudentButton}
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
