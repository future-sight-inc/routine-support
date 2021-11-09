import React, { ReactNode } from "react";

import * as S from "./styled";

interface WeekLayoutProps {
  weekSelect: ReactNode;
  weekRange: ReactNode;
  calendar: ReactNode;
  addActivityButton: ReactNode;
  activityModal: ReactNode;
  loading: boolean;
}

export const WeekLayout: React.FC<WeekLayoutProps> = ({
  weekSelect,
  weekRange,
  calendar,
  addActivityButton,
  activityModal,
  loading,
}) => {
  if (loading) {
    return <S.Spinner />;
  }

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
        <S.Body>{calendar}</S.Body>
      </S.Column>
      {activityModal}
    </S.Wrapper>
  );
};
