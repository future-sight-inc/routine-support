import React from "react";

import { Activity } from "features/activity/types";
import { Week } from "features/week/types";
import { isDateStringToday } from "utils/isDateStringToday";

import * as S from "./styled";
import { getActivitiesArray, getTimeRange } from "./utils";

export interface WeekCalendarActions {
  openActivityModal: (activity: Activity) => void;
  openNewActivityModal: () => void;
}
interface WeekCalendarProps {
  week: Week;
  actions: WeekCalendarActions;
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({
  week,
  actions,
}) => {
  return (
    <S.Wrapper>
      <S.TimeColumn>
        {getTimeRange(week).map((time) => (
          <S.Cell>
            <S.Time>{time}</S.Time>
          </S.Cell>
        ))}
      </S.TimeColumn>
      {week?.days.map((day, index) => (
        <S.Column
          today={isDateStringToday(day.date)}
          weekend={index >= 5 && index <= 6}
        >
          {getActivitiesArray(week).map((activity) => (
            <S.Cell onClick={actions.openNewActivityModal}>
              {activity?.title || ""}
            </S.Cell>
          ))}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
