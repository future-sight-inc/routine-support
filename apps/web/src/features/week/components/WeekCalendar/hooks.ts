import moment from "moment";
import { Moment } from "moment";
import { TimeString } from "types/main";
import { parseTime } from "utils/parseTime";

import { WeekCalendarActions } from "./WeekCalendar";

export const useWeekCalendarComponent = (actions: WeekCalendarActions) => {
  const onCellClick = (time: TimeString, day: Moment) => {
    if (parseTime(time, day) > moment()) {
      actions.openNewActivityModal({
        date: day,
        start: parseTime(time, day),
        end: parseTime(time, day).add(1, "hours"),
      });
    }
  };

  return { models: {}, operations: { onCellClick } };
};
