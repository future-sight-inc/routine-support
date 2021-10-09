import React from "react";

import { Activity } from "features/activity/types";
import { Week } from "features/week/types";
import { isToday } from "utils/isToday";

import * as S from "./styled";
import { getTimeRange } from "./utils";

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
        {getTimeRange(week).map((time) => (
          <S.Cell>
            <S.Time>{time}</S.Time>
          </S.Cell>
        ))}
      </S.TimeColumn>
      {week?.days.map((day, index) => (
        <S.Column today={isToday(day.date)} weekend={index >= 5 && index <= 6}>
          {day.activities.map((activity) => (
            <S.Cell
              onClick={() => actions.openNewActivityModal({ ...activity })}
            >
              {activity?.name || ""}
            </S.Cell>
          ))}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
