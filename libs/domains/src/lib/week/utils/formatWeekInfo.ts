import { WeekInfo, WeekInfoDto } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";

export const formatWeekInfo = (weekInfoDto: WeekInfoDto): WeekInfo => {
  const weekInfo: WeekInfo = {
    ...weekInfoDto,
    days: weekInfoDto.days.map((day) => parseDate(day)),
    timeRange: weekInfoDto.timeRange,
  };

  return weekInfo;
};
