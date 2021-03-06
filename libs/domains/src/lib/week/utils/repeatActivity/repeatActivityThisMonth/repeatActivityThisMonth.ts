import { Activity } from "@routine-support/domains";
import { Moment } from "moment";
import { getDayNumbersFromWeek } from "./getDayNumbersFromWeek";

export const repeatActivityThisMonth = (
  activity: Activity,
  daysOfCurrentWeek: Moment[]
): Activity | undefined => {
  const dayNumbersOfWeek = getDayNumbersFromWeek(daysOfCurrentWeek);
  const activityDayNumber = activity.date.date();
  const repeatActivityDayIndex = dayNumbersOfWeek.indexOf(activityDayNumber);
  const shouldRepeatActivity = repeatActivityDayIndex !== -1;

  if (shouldRepeatActivity) {
    return { ...activity, date: daysOfCurrentWeek[repeatActivityDayIndex] };
  }

  return undefined;
};
