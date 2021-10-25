import { ActivityDto } from "dtos/ActivityDto";
import { Activity } from "features/activity/types";

import { stringifyDate } from "./stringifyDate";
import { stringifyTime } from "./stringifyTime";

export const formatActivity = (activity: Activity): ActivityDto => {
  return {
    ...activity,
    date: stringifyDate(activity.date),
    start: stringifyTime(activity.start),
    end: stringifyTime(activity.end),
  };
};
