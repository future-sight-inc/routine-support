import React, { createRef } from "react";

import moment from "moment";

import { ActivityGroup } from "./components/ActivityGroup";
import { useWeekCalendarComponent } from "./hooks";
import * as S from "./styled";
import { groupActivities } from "./utils";
import { Activity, Week } from "@routine-support/models";
import { isToday, parseTime, stringifyDate } from "@routine-support/utils";

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
  const wrapperRef = createRef<HTMLDivElement>();

  const {
    models: { timelineTopOffset },
    operations: { onCellClick },
  } = useWeekCalendarComponent(wrapperRef, actions);

  return (
    <S.Wrapper ref={wrapperRef}>
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
              onClick={() => onCellClick(time, day)}
              passed={parseTime(time, day) > moment()}
            ></S.Cell>
          ))}
          {groupActivities(
            week.days.find(
              (item) => stringifyDate(item.date) === stringifyDate(day)
            )?.activities || []
          ).map((group) => (
            <ActivityGroup
              timeRange={week.weekInfo.timeRange}
              activities={group.activities}
              onActivityClick={actions.openActivityModal}
            />
          ))}
        </S.Column>
      ))}
      <S.TimeLine top={timelineTopOffset} />
    </S.Wrapper>
  );
};
