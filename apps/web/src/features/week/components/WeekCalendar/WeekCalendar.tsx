import React, { createRef } from "react";

import { Activity, Student, Week } from "@routine-support/domains";
import { isToday, stringifyDate } from "@routine-support/utils";

import { ActivityGroup } from "./components/ActivityGroup";
import { useWeekCalendarComponent } from "./hooks";
import * as S from "./styled";
import { groupActivities } from "./utils";

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
      {week?.weekInfo.days.map((day, index) => (
        <S.Column today={isToday(day)} weekend={index >= 5 && index <= 6}>
          {week.weekInfo.timeRange.map((time) => (
            <S.Cell onClick={() => onCellClick(time, day)}></S.Cell>
          ))}
          {groupActivities(
            week.days.find(
              (item) => stringifyDate(item.date) === stringifyDate(day)
            )?.activities || []
          ).map((group) => (
            <ActivityGroup
              students={students}
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
