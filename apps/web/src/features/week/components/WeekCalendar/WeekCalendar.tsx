import React from "react";

import { Activity } from "features/activity/types";
import { Week } from "features/week/types";
import { isToday } from "utils/isToday";

import * as S from "./styled";

export interface WeekCalendarActions {
  openActivityModal: (activity: Activity) => void;
  openNewActivityModal: (activity?: Partial<Activity>) => void;
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
        {week.weekInfo.timeRange.map((time) => (
          <S.Cell>
            <S.Time>{time}</S.Time>
          </S.Cell>
        ))}
      </S.TimeColumn>
      {week?.weekInfo.days.map((day, index) => (
        <S.Column today={isToday(day)} weekend={index >= 5 && index <= 6}>
          {week.weekInfo.timeRange.map((time) => (
            <S.Cell
              onClick={() =>
                actions.openNewActivityModal({
                  date: day,
                  start: day.add(time.split(":")[0], "hours"),
                })
              }
            ></S.Cell>
          ))}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
