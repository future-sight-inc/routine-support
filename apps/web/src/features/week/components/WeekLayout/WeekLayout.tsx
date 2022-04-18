import React, { ReactNode } from "react";

import * as S from "./styled";

interface WeekLayoutProps {
  miniCalendar: ReactNode;
  weekRange: ReactNode;
  calendar: ReactNode;
  addActivityButton: ReactNode;
  activityModal: ReactNode;
  activityFilter: ReactNode;
}

export const WeekLayout: React.FC<WeekLayoutProps> = ({
  miniCalendar,
  weekRange,
  calendar,
  addActivityButton,
  activityModal,
  activityFilter,
}) => {
  return (
    <S.Wrapper>
      <S.ActionsWrapper>
        <S.ButtonWrapper>{addActivityButton}</S.ButtonWrapper>
        <S.MiniCalendarWrapper>{miniCalendar}</S.MiniCalendarWrapper>
        <S.FilterWrapper>{activityFilter}</S.FilterWrapper>
      </S.ActionsWrapper>
      <S.CalendarWrapper>
        <S.Head>{weekRange}</S.Head>
        <S.Body>{calendar}</S.Body>
      </S.CalendarWrapper>
      {activityModal}
    </S.Wrapper>
  );
};
