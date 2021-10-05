import React, { ReactNode } from "react";
import * as S from "./styled";

interface WeekLayoutProps {
  weekSelect: ReactNode;
  weekRange: ReactNode;
  calendar: ReactNode;
}

export const WeekLayout: React.FC<WeekLayoutProps> = ({
  weekSelect,
  weekRange,
  calendar,
}) => {
  return (
    <S.Wrapper>
      <S.Column></S.Column>
      <S.Column>
        <S.Head>
          {weekSelect}
          {weekRange}
        </S.Head>
        <S.Body>{calendar}</S.Body>
      </S.Column>
    </S.Wrapper>
  );
};
