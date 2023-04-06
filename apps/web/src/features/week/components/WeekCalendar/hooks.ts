import { RefObject, useEffect, useState } from "react";

import { groupActivities, Week } from "@routine-support/domains";
import { getTimeInHours, parseTime } from "@routine-support/utils";
import { addHours, isToday } from "date-fns";

import { WeekCalendarActions } from "./WeekCalendar";

export const useWeekCalendarComponent = ({
  week,
  containerRef,
  currentTimeRef,
  actions,
}: {
  week: Week;
  containerRef: RefObject<HTMLDivElement>;
  currentTimeRef: RefObject<HTMLDivElement>;
  actions: WeekCalendarActions;
}) => {
  const [timelineTopOffset, setTimelineTopOffset] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkOffset = () => {
      const frame = containerRef?.current?.scrollHeight;
      const hours = getTimeInHours(new Date());
      const offsetTop = (hours / 24) * (frame || 0);

      setTimelineTopOffset(offsetTop);
    };

    checkOffset();

    const timerId = setInterval(() => checkOffset(), 60 * 1000);

    return () => clearInterval(timerId);
  }, [containerRef]);

  useEffect(() => {
    if (!scrolled && currentTimeRef.current && timelineTopOffset) {
      currentTimeRef.current.scrollIntoView({ block: "center" });
      setScrolled(true);
    }
  }, [scrolled, currentTimeRef, timelineTopOffset]);

  const onCellClick = (time: string, day: Date) => {
    actions.openNewActivityModal({
      date: day,
      start: parseTime(time),
      end: addHours(parseTime(time), 1),
    });
  };

  return {
    models: {
      timelineTopOffset,
      groupedActivitiesByDays: week.days.map((day) => groupActivities(day?.activities)),
      isCurrentWeek: week.days.some((day) => isToday(day.date)),
    },
    operations: { onCellClick },
  };
};
