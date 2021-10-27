import moment, { Moment } from "moment";
import { RefObject, useEffect, useState } from "react";
import { Theme } from "styled/theme";
import { TimeString } from "types/main";
import { getMinutes } from "utils/getMinutes";
import { parseTime } from "utils/parseTime";
import { pxToNumber } from "utils/pxToNumber";
import { WeekCalendarActions } from "./WeekCalendar";

export const useWeekCalendarComponent = (
  containerRef: RefObject<HTMLDivElement>,
  actions: WeekCalendarActions
) => {
  const [timelineTopOffset, setTimelineTopOffset] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const checkOffset = () => {
      const frame = containerRef?.current?.scrollHeight!;
      const minutes = getMinutes(moment());
      const offsetTop = (minutes / (24 * 60)) * frame;

      if (!scrolled) {
        setTimelineTopOffset(offsetTop);
        containerRef?.current?.scrollTo({
          top: offsetTop - pxToNumber(Theme.size.cellHeight),
        });
        setScrolled(true);
      }
    };

    checkOffset();
    const timerId = setInterval(() => checkOffset(), 60 * 1000);

    return () => clearInterval(timerId);
  }, [containerRef]);

  const onCellClick = (time: TimeString, day: Moment) => {
    if (parseTime(time, day) > moment()) {
      actions.openNewActivityModal({
        date: day,
        start: parseTime(time, day),
        end: parseTime(time, day).add(1, "hours"),
      });
    }
  };

  return { models: { timelineTopOffset }, operations: { onCellClick } };
};
