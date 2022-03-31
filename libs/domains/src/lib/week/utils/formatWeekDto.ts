import {
  formatDayDto,
  Week,
  WeekDto,
} from "@routine-support/domains";
import { formatWeekInfo } from "./formatWeekInfo";

export const formatWeekDto = (weekDto: WeekDto): Week => {
  const week: Week = {
    days: weekDto.days.map(formatDayDto),
    weekInfo: formatWeekInfo(weekDto.weekInfo),
  };

  return week;
};
