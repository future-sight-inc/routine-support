import { getDateRangeFromWeek } from "../getDateRangeFromWeek";
import { Activity, RepeatTypeEnum } from "@routine-support/models";
import { repeatActivityEveryDay } from "../repeatActivity";
import { repeatActivityThisWeek } from "./repeatActivityThisWeek";
import { repeatActivityThisMonth } from "./repeatActivityThisMonth";

export const repeatActivity = (
  activity: Activity,
  weekNumber: number,
  yearNumber: number
) => {
  const currentWeek = getDateRangeFromWeek({ weekNumber, yearNumber });

  switch (activity.repeat) {
    case RepeatTypeEnum.EveryDay:
      return repeatActivityEveryDay(activity, currentWeek);
    case RepeatTypeEnum.EveryWeek:
      return repeatActivityThisWeek(activity, currentWeek);
    case RepeatTypeEnum.EveryMonth:
      return repeatActivityThisMonth(activity, currentWeek);
    default:
      return;
  }
};
