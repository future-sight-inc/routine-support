import React, { ReactNode } from "react";

import * as S from "./styled";

interface WeekLayoutProps {
  weekSelect: ReactNode;
  weekRange: ReactNode;
  calendar: ReactNode;
  addActivityButton: ReactNode;
  loading: boolean;
}

export const WeekLayout: React.FC<WeekLayoutProps> = ({
  weekSelect,
  weekRange,
  calendar,
  addActivityButton,
  loading,
}) => {
  return (
    <S.Wrapper>
      <S.Column>
        <S.ButtonWrapper>{addActivityButton}</S.ButtonWrapper>
      </S.Column>
      <S.Column>
        <S.Head>
          {weekSelect}
          {weekRange}
        </S.Head>
        <S.Body>{loading ? <S.Spinner /> : calendar}</S.Body>
      </S.Column>
    </S.Wrapper>
  );
};
