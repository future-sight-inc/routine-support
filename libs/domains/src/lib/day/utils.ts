import { formatActivityDto } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { Day, DayDto } from "./types";

export const formatDayDto = (dayDto: DayDto): Day => {
  const day: Day = {
    date: parseDate(dayDto.date),
    activities: dayDto.activities.map(formatActivityDto),
  };

  return day;
};
