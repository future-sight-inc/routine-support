import { Activity, DateInfo, Day, getDaysOfWeek } from "@routine-support/domains";
import { getTimeRange } from "./getTimeRange";

export function getDaysOfCalendarWeek(activities: Activity[], weekInfo: DateInfo): Day[] {
  const daysOfWeek = getDaysOfWeek(weekInfo);

  const daysOfCalendarWeek = daysOfWeek.map((day) => {
    const calendarDay: Day = {
      date: day,
      activities: [],
      timeRange: getTimeRange(),
    };

    calendarDay.activities = activities.filter((activity) => activity?.date === calendarDay.date);

    return calendarDay;
  });

  return daysOfCalendarWeek;
}
