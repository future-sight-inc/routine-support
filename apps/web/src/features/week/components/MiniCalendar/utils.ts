import { getDateInfoFromMoment, getDaysOfWeek } from "@routine-support/domains";
import { Moment } from "moment";

export const getWeeksOfCalendar = (currentDate: Moment) => {
  const start = currentDate.clone().locale("ru").startOf("month").startOf("week");
  const end = currentDate.clone().locale("ru").endOf("month");
  const weeks: Moment[][] = [];

  let isIncomplete = true;

  while (isIncomplete) {
    weeks.push(getDaysOfWeek(getDateInfoFromMoment(start)));
    start.add(1, "w");

    if (start.isAfter(end)) {
      isIncomplete = false;
    }
  }

  return weeks;
};
