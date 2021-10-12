import { ActivityDto } from "dtos/ActivityDto";
import { Activity } from "features/activity/types";

import { parseDate } from "./parseDate";
import { parseTime } from "./parseTime";

export const formatActivityDto = (activityDto: ActivityDto): Activity => {
  return {
    ...activityDto,
    date: parseDate(activityDto.date),
    start: parseTime(activityDto.start),
    end: parseTime(activityDto.end),
  };
};
