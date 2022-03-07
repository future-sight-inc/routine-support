import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { Moment } from "moment";
import { repeatActivityEveryDay } from "./repeatActivityEveryDay";
import { repeatActivityThisMonth } from "./repeatActivityThisMonth";
import { repeatActivityThisWeek } from "./repeatActivityThisWeek";

export const repeatActivity = (activity: Activity, currentWeek: Moment[]) => {
  switch (activity.repeatType) {
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
