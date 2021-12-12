import { formatActivityDto } from "@routine-support/models";
import { parseDate } from "@routine-support/utils";
import { DayDto, Day } from "./types";

export const formatDayDto = (dayDto: DayDto): Day => {
  const day: Day = {
    date: parseDate(dayDto.date),
    activities: dayDto.activities.map(formatActivityDto),
  };

  return day;
};
