import React, { ReactNode } from "react";

import * as S from "./styled";

interface WeekLayoutProps {
  weekSelect: ReactNode;
  weekRange: ReactNode;
  calendar: ReactNode;
  addActivityButton: ReactNode;
  activityModal: ReactNode;
  activityFilter: ReactNode;
}

export const WeekLayout: React.FC<WeekLayoutProps> = ({
  // weekSelect,
  weekRange,
  calendar,
  addActivityButton,
  activityModal,
  activityFilter,
}) => {
  return (
    <S.Wrapper>
      <S.Column>
        <S.ButtonWrapper>{addActivityButton}</S.ButtonWrapper>
        {activityFilter}
      </S.Column>
      <S.Column>
        <S.Head>{weekRange}</S.Head>
        <S.Body>{calendar}</S.Body>
      </S.Column>
      {activityModal}
    </S.Wrapper>
  );
};
