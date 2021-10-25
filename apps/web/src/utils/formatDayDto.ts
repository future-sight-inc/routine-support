import { DayDto } from "dtos/DayDto";
import { Day } from "features/day/types";

import { formatActivityDto } from "./formatActivityDto";
import { parseDate } from "./parseDate";

export const formatDayDto = (dayDto: DayDto): Day => {
  const day: Day = {
    date: parseDate(dayDto.date),
    activities: dayDto.activities.map(formatActivityDto),
  };

  return day;
};
