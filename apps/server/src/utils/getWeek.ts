import { getDateStringRangeFromWeek } from "./getDateStringRangeFromWeek";

export function getWeek(activities, weekNumber, year) {
  const DAYS = getDateStringRangeFromWeek(weekNumber, year);

  const WEEK = DAYS.map((day) => {
    const DAY = {
      date: day,
      activities: [],
    };

    DAY.activities = activities.filter(
      (activity) => activity?.date === DAY.date
    );

    return DAY;
  });

  return WEEK;
}
