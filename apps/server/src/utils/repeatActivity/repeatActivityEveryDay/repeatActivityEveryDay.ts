import { Activity } from "@routine-support/models";

export const repeatActivityEveryDay = (
  activity: Activity,
  daysOfWeek: moment.Moment[]
): Activity[] => {
  const repeatedActivity: Activity[] = [];

  daysOfWeek.forEach((day) => {
    const shouldRepeatActivity = day.isSameOrAfter(activity.date);

    if (shouldRepeatActivity) {
      repeatedActivity.push({ ...activity, date: day });
    }
  });

  return repeatedActivity;
};
