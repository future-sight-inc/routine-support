import { DATE_FORMAT } from "@routine-support/constants";
import { ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";
import { getDateRangeFromWeek } from "./getDateRangeFromWeek";
import moment = require("moment");

export const repeatActivity = (
  activity: ActivitySchema,
  repeatType: RepeatTypeEnum,
  weekNumber: number,
  yearNumber: number
) => {
  const week = getDateRangeFromWeek(weekNumber, yearNumber);

  switch (repeatType) {
    case RepeatTypeEnum.EveryDay:
      return repeatActivityEveryDay(activity, week);
    case RepeatTypeEnum.EveryWeek:
      return repeatActivityEveryWeek(activity, week, weekNumber, yearNumber);
    case RepeatTypeEnum.EveryMonth:
      return repeatActivityEveryMonth(activity, week);
    default:
      return;
  }
};

export const repeatActivityEveryDay = (
  // ! Баг в mongoose
  // eslint-disable-next-line
  activity: any,
  week: moment.Moment[]
) => {
  const result = [];

  for (let i = 0; i <= 6; i++) {
    const newActivity = {
      ...activity._doc,
      date: week[i],
    };

    if (newActivity.date.isSameOrAfter(moment(activity.date, DATE_FORMAT))) {
      result.push({ ...newActivity, date: week[i].format(DATE_FORMAT) });
    }
  }

  return result;
};

export const repeatActivityEveryWeek = (
  // ! Баг в mongoose
  // eslint-disable-next-line
  activity: any,
  week: moment.Moment[],
  weekNumber: number,
  yearNumber: number
) => {
  const newActivity = {
    ...activity._doc,
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
  // ! Баг в mongoose
  // eslint-disable-next-line
  activity: any,
  week: moment.Moment[]
) => {
  for (let i = 0; i <= 6; i++) {
    const newActivity = {
      ...activity._doc,
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
