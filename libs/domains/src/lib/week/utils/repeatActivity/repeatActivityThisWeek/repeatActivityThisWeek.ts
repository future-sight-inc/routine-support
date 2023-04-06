import { Activity } from "@routine-support/domains";
import { getDay } from "date-fns";

export const repeatActivityThisWeek = (
  activity: Activity,
  daysOfCurrentWeek: Date[]
): Activity | undefined => {
  const dayOfWeekIndex = getDay(activity.date);
  const repeatedActivityDate = daysOfCurrentWeek[dayOfWeekIndex];

  const shouldRepeatActivity = repeatedActivityDate >= activity.date;

  if (shouldRepeatActivity) {
    return { ...activity, date: repeatedActivityDate };
  }

  return undefined;
};
