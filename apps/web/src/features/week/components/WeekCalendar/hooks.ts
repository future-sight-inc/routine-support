import { RefObject, useEffect, useState } from "react";

import { TimeString } from "@routine-support/types";
import { getMinutes, parseTime } from "@routine-support/utils";
import moment, { Moment } from "moment";

import { WeekCalendarActions } from "./WeekCalendar";

export const useWeekCalendarComponent = (
  containerRef: RefObject<HTMLDivElement>,
  currentTimeRef: RefObject<HTMLDivElement>,
  actions: WeekCalendarActions
) => {
  const [timelineTopOffset, setTimelineTopOffset] = useState(0);

  useEffect(() => {
    const checkOffset = () => {
      const frame = containerRef?.current?.scrollHeight;
      const minutes = getMinutes(moment());
      const offsetTop = (minutes / (24 * 60)) * (frame || 0);

      setTimelineTopOffset(offsetTop);
    };

    checkOffset();

    const timerId = setInterval(() => checkOffset(), 60 * 1000);

    return () => clearInterval(timerId);
  }, [containerRef, currentTimeRef]);

  useEffect(() => {
    currentTimeRef?.current?.scrollIntoView();
  }, [currentTimeRef]);

  const onCellClick = (time: TimeString, day: Moment) => {
    actions.openNewActivityModal({
      date: day,
      start: parseTime(time),
      end: parseTime(time).add(1, "hours"),
    });
  };

  return { models: { timelineTopOffset }, operations: { onCellClick } };
};
