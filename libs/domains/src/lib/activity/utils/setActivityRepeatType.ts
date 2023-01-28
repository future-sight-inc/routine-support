import { Activity, RepeatTypeEnum } from "@routine-support/domains";

export const setActivityRepeatType = (activity: Activity, repeatType: RepeatTypeEnum): void => {
  activity.repeatType = repeatType;
};
