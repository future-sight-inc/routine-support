import { ActivitySchema, DayDto } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { getDateStringRangeFromWeek } from "./getDateStringRangeFromWeek";

export function getDaysOfCalendarWeek(
  activities: ActivitySchema[],
  weekInfo: { weekNumber: number; yearNumber: number }
): DayDto[] {
  const daysOfWeek = getDateStringRangeFromWeek(weekInfo);

  const daysOfCalendarWeek = daysOfWeek.map((day) => {
    const calendarDay: {
      date: DateString;
      activities: ActivitySchema[];
    } = {
      date: day,
      activities: [],
    };

    calendarDay.activities = activities.filter(
      (activity) => activity?.date === calendarDay.date
    );

    return calendarDay;
  });

  return daysOfCalendarWeek;
}
