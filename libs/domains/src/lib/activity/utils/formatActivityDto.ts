import { Activity, ActivityDto } from "@routine-support/domains";
import { parseDate, parseTime } from "@routine-support/utils";

export const formatActivityDto = (activityDto: ActivityDto): Activity => {
  return {
    ...activityDto,
    date: parseDate(activityDto.date),
    start: parseTime(activityDto.start),
    end: parseTime(activityDto.end),
  };
};
