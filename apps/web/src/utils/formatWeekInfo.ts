import { WeekInfo, WeekInfoDto } from "features/week/types";

import { parseDate } from "./parseDate";

export const formatWeekInfo = (weekInfoDto: WeekInfoDto): WeekInfo => {
  const weekInfo: WeekInfo = {
    days: weekInfoDto.days.map((day) => parseDate(day)),
    timeRange: weekInfoDto.timeRange,
  };

  return weekInfo;
};
