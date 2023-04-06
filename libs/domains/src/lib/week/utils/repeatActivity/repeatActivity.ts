import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { repeatActivityEveryDay } from "./repeatActivityEveryDay";
import { repeatActivityThisMonth } from "./repeatActivityThisMonth";
import { repeatActivityThisWeek } from "./repeatActivityThisWeek";
import { repeatActivityThisYear } from "./repeatActivityThisYear";

export const repeatActivity = (
  activity: Activity,
  currentWeek: Date[]
): Activity[] | Activity | undefined => {
  switch (activity.repeatType) {
    case RepeatTypeEnum.EveryDay:
      return repeatActivityEveryDay(activity, currentWeek);
    case RepeatTypeEnum.EveryWeek:
      return repeatActivityThisWeek(activity, currentWeek);
    case RepeatTypeEnum.EveryMonth:
      return repeatActivityThisMonth(activity, currentWeek);
    case RepeatTypeEnum.EveryYear:
      return repeatActivityThisYear(activity, currentWeek);
    default:
      return;
  }
};
