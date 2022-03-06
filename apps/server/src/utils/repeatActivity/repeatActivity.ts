import { Activity, RepeatTypeEnum } from "@routine-support/models";
import { repeatActivityEveryDay } from "./repeatActivityEveryDay";
import { repeatActivityThisMonth } from "./repeatActivityThisMonth";
import { repeatActivityThisWeek } from "./repeatActivityThisWeek";

export const repeatActivity = (
  activity: Activity,
  currentWeek: moment.Moment[]
) => {
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
