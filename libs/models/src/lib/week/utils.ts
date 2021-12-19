import { parseDate, serialize } from "@routine-support/utils";
import moment from "moment";
import { formatDayDto } from "../day";
import { DateInfo, Week, WeekDto, WeekInfo, WeekInfoDto } from "./types";

export const formatWeekDto = (weekDto: WeekDto): Week => {
  const week: Week = {
    days: weekDto.days.map(formatDayDto),
    weekNumber: weekDto.weekNumber,
    year: weekDto.year,
    weekInfo: formatWeekInfo(weekDto.weekInfo),
  };

  return week;
};

export const formatWeekInfo = (weekInfoDto: WeekInfoDto): WeekInfo => {
  const weekInfo: WeekInfo = {
    days: weekInfoDto.days.map((day) => parseDate(day)),
    timeRange: weekInfoDto.timeRange,
  };

  return weekInfo;
};

export const getCurrentDateInfo = (): DateInfo => {
  return {
    year: Number(moment().get("year")),
    // ! Баг с получением номера текущей недели
    week: Number(moment().get("week")) - 1,
  };
};

export const getDateInfoFromMoment = (moment: moment.Moment): DateInfo => {
  return {
    year: Number(moment.get("year")),
    week: Number(moment.get("week")),
  };
};

export const getDateInfoQuery = (dateInfo: DateInfo): string => {
  const query = serialize(dateInfo);

  return query;
};
