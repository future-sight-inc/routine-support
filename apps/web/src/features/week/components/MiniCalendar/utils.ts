import { getDateInfoFromDate, getDaysOfWeek } from "@routine-support/domains";
import { addWeeks, endOfMonth, isAfter, startOfMonth, startOfWeek } from "date-fns";

export const getWeeksOfCalendar = (currentDate: Date) => {
  let start = startOfWeek(startOfMonth(currentDate));
  const end = endOfMonth(start);
  const weeks: Date[][] = [];

  let isIncomplete = true;

  while (isIncomplete) {
    weeks.push(getDaysOfWeek(getDateInfoFromDate(start)));
    start = addWeeks(start, 1);

    if (isAfter(start, end)) {
      isIncomplete = false;
    }
  }

  return weeks;
};
