import React, { createRef } from "react";

import {
  Activity,
  groupActivities,
  Student,
  Week,
} from "@routine-support/domains";
import { isToday } from "@routine-support/utils";
import { stringifyDate } from "@routine-support/utils";

import { ActivityGroup } from "./components/ActivityGroup";
import { useWeekCalendarComponent } from "./hooks";
import * as S from "./styled";
import { isWeekend } from "./utils";

export interface WeekCalendarActions {
  openActivityModal: (activity: Activity) => void;
  openNewActivityModal: (activity?: Partial<Activity>) => void;
}
interface WeekCalendarProps {
  week: Week;
  students: Student[];
  actions: WeekCalendarActions;
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({
  week,
  students,
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
        {week.weekInfo.timeRange.map((time, index) => (
          <S.Cell key={index}>
            <S.Time>{time}</S.Time>
          </S.Cell>
        ))}
      </S.TimeColumn>
      {week.weekInfo.days.map((day) => (
        <S.Column isWeekend={isWeekend(day)}>
          {week.weekInfo.timeRange.map((time) => (
            <S.Cell onClick={() => onCellClick(time, day)}></S.Cell>
          ))}
          {groupActivities(
            week.days.find(
              (item) => stringifyDate(item.date) === stringifyDate(day)
            )?.activities
          ).map((group) => (
            <ActivityGroup
              students={students}
              timeRange={week.weekInfo.timeRange}
              activities={group.activities}
              onActivityClick={actions.openActivityModal}
            />
          ))}
          {isToday(day) && <S.TimeLine top={timelineTopOffset} />}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
