import { Activity } from "@routine-support/models";

export const repeatActivityEveryDay = (
  activity: Activity,
  daysOfCurrentWeek: moment.Moment[]
): Activity[] => {
  const repeatedActivity: Activity[] = [];

  daysOfCurrentWeek.forEach((day) => {
    const shouldRepeatActivity = day.isSameOrAfter(activity.date);

    if (shouldRepeatActivity) {
      repeatedActivity.push({ ...activity, date: day });
    }
  });

  return repeatedActivity;
};
