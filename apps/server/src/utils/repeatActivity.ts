import { DATE_FORMAT } from "@routine-support/constants";
import { ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";
import { getDateRangeFromWeek } from "./getDateRangeFromWeek";
import moment = require("moment");

export const repeatActivity = (
  // todo resolve
  activity: any,
  repeatType: RepeatTypeEnum,
  weekNumber: number,
  yearNumber: number
) => {
  const week = getDateRangeFromWeek(weekNumber, yearNumber);

  const newActivity: ActivitySchema = { ...activity._doc };

  switch (repeatType) {
    case RepeatTypeEnum.EveryDay:
      return repeatActivityEveryDay(newActivity, week);
    case RepeatTypeEnum.EveryWeek:
      return repeatActivityEveryWeek(newActivity, week, weekNumber, yearNumber);
    case RepeatTypeEnum.EveryMonth:
      return repeatActivityEveryMonth(newActivity, week);
    default:
      return;
  }
};

export const repeatActivityEveryDay = (
  activity: ActivitySchema,
  week: moment.Moment[]
): ActivitySchema[] => {
  const result = [];

  for (let i = 0; i <= 6; i++) {
    const newActivity = {
      ...activity,
      date: week[i],
    };

    if (newActivity.date.isSameOrAfter(moment(activity.date, DATE_FORMAT))) {
      result.push({ ...newActivity, date: week[i].format(DATE_FORMAT) });
    }
  }

  return result;
};

export const repeatActivityEveryWeek = (
  activity: ActivitySchema,
  week: moment.Moment[],
  weekNumber: number,
  yearNumber: number
): ActivitySchema[] => {
  const newActivity = {
    ...activity,
    date: moment(activity.date, DATE_FORMAT),
  };
  // ! Внутренняя магия библиотеки
  newActivity.date.set("week", weekNumber + 1);
  newActivity.date.set("year", yearNumber);

  if (
    newActivity.date.isSameOrAfter(week[0], "day") &&
    week[6].isSameOrAfter(newActivity.date, "day")
  ) {
    return [{ ...newActivity, date: newActivity.date.format(DATE_FORMAT) }];
  }

  return [];
};

export const repeatActivityEveryMonth = (
  activity: ActivitySchema,
  week: moment.Moment[]
): ActivitySchema[] => {
  for (let i = 0; i <= 6; i++) {
    const newActivity = {
      ...activity,
      date: moment(activity.date, DATE_FORMAT),
    };
    newActivity.date.set("month", week[i].get("month"));
    newActivity.date.set("year", week[i].get("year"));

    if (
      newActivity.date.isSameOrAfter(week[0], "day") &&
      week[6].isSameOrAfter(newActivity.date, "day")
    ) {
      return [{ ...newActivity, date: newActivity.date.format(DATE_FORMAT) }];
    }
  }

  return [];
};
