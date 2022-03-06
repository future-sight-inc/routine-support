import { Activity } from "@routine-support/models";
import { getDayNumbersFromWeek } from "../utils/getDayNumbersFromWeek";

export const repeatActivityThisMonth = (
  activity: Activity,
  daysOfCurrentWeek: moment.Moment[]
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
