import { Activity } from "@routine-support/models";

export const repeatActivityThisWeek = (
  activity: Activity,
  daysOfCurrentWeek: moment.Moment[]
): Activity | undefined => {
  // todo Решить проблемы с локалью в 22 задаче
  const dayOfWeekIndex = activity.date.locale("ru").weekday();
  const repeatedActivityDate = daysOfCurrentWeek[dayOfWeekIndex];

  const shouldRepeatActivity = repeatedActivityDate.isSameOrAfter(
    activity.date
  );

  if (shouldRepeatActivity) {
    return { ...activity, date: repeatedActivityDate };
  }

  return undefined;
};
