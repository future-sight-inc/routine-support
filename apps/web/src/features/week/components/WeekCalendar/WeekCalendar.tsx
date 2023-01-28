import React, { createRef } from "react";

import { Activity, isTimeCrossed, Student, Week } from "@routine-support/domains";
import { parseTime, stringifyTime } from "@routine-support/utils";
import { addHours, isToday, isWeekend } from "date-fns";

import { ActivityGroup } from "./components/ActivityGroup";
import { AddActivityIcon } from "./components/AddActivityIcon";
import { useWeekCalendarComponent } from "./hooks";
import * as S from "./styled";

export interface WeekCalendarActions {
  openActivityModal: (activity: Activity) => void;
  openNewActivityModal: (activity?: Partial<Activity>) => void;
}

interface WeekCalendarProps {
  week: Week;
  students: Student[];
  actions: WeekCalendarActions;
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({ week, students, actions }) => {
  const containerRef = createRef<HTMLDivElement>();
  const currentTimeRef = createRef<HTMLDivElement>();

  const {
    models: { timelineTopOffset, groupedActivitiesByDays, isCurrentWeek },
    operations: { onCellClick },
  } = useWeekCalendarComponent({ week, containerRef, currentTimeRef, actions });

  return (
    <S.Wrapper ref={containerRef}>
      <S.TimeColumn>
        {week.weekInfo.timeRange.map((time, index) => (
          <S.Cell key={index}>{index > 0 && <S.Time>{time}</S.Time>}</S.Cell>
        ))}
        {isCurrentWeek && (
          <S.CurrentTime top={timelineTopOffset}>{stringifyTime(new Date())}</S.CurrentTime>
        )}
      </S.TimeColumn>
      {week.weekInfo.days.map((day, index) => (
        <S.Column isWeekend={isWeekend(day)}>
          {week.weekInfo.timeRange.map((time) => (
            <S.Cell onClick={() => onCellClick(time, day)}>
              <AddActivityIcon
                isEmpty={
                  !groupedActivitiesByDays[index].some((group) =>
                    isTimeCrossed(group, {
                      start: parseTime(time, day),
                      end: addHours(parseTime(time, day), 1),
                    })
                  )
                }
              />
            </S.Cell>
          ))}
          {groupedActivitiesByDays[index].map((group) => (
            <ActivityGroup
              key={stringifyTime(group.start)}
              students={students}
              timeRange={week.weekInfo.timeRange}
              activities={group.activities}
              onActivityClick={actions.openActivityModal}
            />
          ))}
          {isToday(day) && <S.TimeLine top={timelineTopOffset} ref={currentTimeRef} />}
        </S.Column>
      ))}
    </S.Wrapper>
  );
};
