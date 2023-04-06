import { Activity } from "@routine-support/domains";
import { getDate } from "date-fns";
import { getDayNumbersFromWeek } from "./getDayNumbersFromWeek";

export const repeatActivityThisMonth = (
  activity: Activity,
  daysOfCurrentWeek: Date[]
): Activity | undefined => {
  const dayNumbersOfWeek = getDayNumbersFromWeek(daysOfCurrentWeek);
  const activityDayNumber = getDate(activity.date)
  const repeatActivityDayIndex = dayNumbersOfWeek.indexOf(activityDayNumber);
  const shouldRepeatActivity = repeatActivityDayIndex !== -1;

  if (shouldRepeatActivity) {
    return { ...activity, date: daysOfCurrentWeek[repeatActivityDayIndex] };
  }

  return undefined;
};
