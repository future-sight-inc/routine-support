import { Week, WeekDto } from "features/week/types";

import { formatDayDto } from "./formatDayDto";
import { formatWeekInfo } from "./formatWeekInfo";

export const formatWeekDto = (weekDto: WeekDto): Week => {
  const week: Week = {
    days: weekDto.days.map(formatDayDto),
    weekNumber: weekDto.weekNumber,
    year: weekDto.year,
    weekInfo: formatWeekInfo(weekDto.weekInfo),
  };

  return week;
};
