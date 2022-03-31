import { Day, DayDto, formatActivityDto } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";

export const formatDayDto = (dayDto: DayDto): Day => {
  const day: Day = {
    date: parseDate(dayDto.date),
    activities: dayDto.activities.map(formatActivityDto),
  };

  return day;
};
