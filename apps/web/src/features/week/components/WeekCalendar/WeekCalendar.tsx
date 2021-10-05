import { Week } from "features/week/types";
import React from "react";
import { getActivitiesArray, getTimeRange } from "./utils";
import * as S from "./styled";
import { isDateStringToday } from "utils/isDateStringToday";

interface WeekCalendarProps {
  loading: boolean;
  week: Week | null;
  actions: {};
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({
  loading,
  week,
}) => {
  if (loading || !week) {
    return <p>Loading...</p>;
  }

  return (
    <S.Wrapper>
      <S.TimeColumn>
        {getTimeRange(week).map((time) => (
          <S.Cell>{time}</S.Cell>
        ))}
      </S.TimeColumn>
      {week?.days.map((day) => (
        <S.Column today={isDateStringToday(day.date)}>
          {getActivitiesArray(week).map((activity) => (
            <S.Cell>{activity?.title || ""}</S.Cell>
          ))}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
