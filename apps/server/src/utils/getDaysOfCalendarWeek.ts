import { ActivitySchema, DateInfo, DaySchema } from "@routine-support/domains";
import { getDateStringRangeFromWeek } from "./getDateStringRangeFromWeek";
import { getTimeRange } from "./getTimeRange";

export function getDaysOfCalendarWeek(
  activities: ActivitySchema[],
  weekInfo: DateInfo
): DaySchema[] {
  const daysOfWeek = getDateStringRangeFromWeek(weekInfo);

  const daysOfCalendarWeek = daysOfWeek.map((day) => {
    const calendarDay: DaySchema = {
      date: day,
      activities: [],
      timeRange: getTimeRange(),
    };

    calendarDay.activities = activities.filter((activity) => activity?.date === calendarDay.date);

    return calendarDay;
  });

  return daysOfCalendarWeek;
}
