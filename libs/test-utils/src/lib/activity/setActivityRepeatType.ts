import { Activity, ActivitySchema, RepeatTypeEnum } from "@routine-support/domains";

export const setActivityRepeatType = (
  activity: ActivitySchema | Activity,
  repeatType: RepeatTypeEnum
): void => {
  activity.repeatType = repeatType;
};
