import { Activity } from "@routine-support/domains";
import { Moment } from "moment";

export const repeatActivityEveryDay = (
  activity: Activity,
  daysOfCurrentWeek: Moment[]
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
