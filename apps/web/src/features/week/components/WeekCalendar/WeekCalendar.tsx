import React from "react";

import { Activity } from "features/activity/types";
import { Week } from "features/week/types";
import { formatDate } from "utils/formatDate";
import { isToday } from "utils/isToday";
import { parseTime } from "utils/parseTime";

import { ActivityGroup } from "./components/ActivityGroup";
import * as S from "./styled";
import { groupActivities } from "./utils";

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
                  start: parseTime(time, day),
                })
              }
            ></S.Cell>
          ))}
          {groupActivities(
            week.days.find((item) => formatDate(item.date) === formatDate(day))
              ?.activities || []
          ).map((group) => (
            <ActivityGroup
              timeRange={week.weekInfo.timeRange}
              activities={group.activities}
              onActivityClick={actions.openActivityModal}
            />
          ))}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
