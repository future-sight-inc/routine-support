import { getDateStringRangeFromWeek } from "./getDateStringRangeFromWeek";

export function getCalendarWeek(activities, weekNumber, yearNumber) {
  const daysOfWeek = getDateStringRangeFromWeek({ weekNumber, yearNumber });

  const calendarWeek = daysOfWeek.map((day) => {
    const calendarDay = {
      date: day,
      activities: [],
    };

    calendarDay.activities = activities.filter(
      (activity) => activity?.date === calendarDay.date
    );

    return calendarDay;
  });

  return calendarWeek;
}
