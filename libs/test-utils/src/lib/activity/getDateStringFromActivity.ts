import { Activity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const getDateStringFromActivity = (activity?: Activity): string => {
  return activity ? stringifyDate(activity.date) : "";
};
