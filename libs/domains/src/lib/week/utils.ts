import { parseDate, serialize } from "@routine-support/utils";
import moment, { Moment } from "moment";
import { formatDayDto } from "../day";
import { DateInfo, Week, WeekDto, WeekInfo, WeekInfoDto } from "./types";

export const formatWeekDto = (weekDto: WeekDto): Week => {
  const week: Week = {
    days: weekDto.days.map(formatDayDto),
    weekInfo: formatWeekInfo(weekDto.weekInfo),
  };

  return week;
};

export const formatWeekInfo = (weekInfoDto: WeekInfoDto): WeekInfo => {
  const weekInfo: WeekInfo = {
    ...weekInfoDto,
    days: weekInfoDto.days.map((day) => parseDate(day)),
    timeRange: weekInfoDto.timeRange,
  };

  return weekInfo;
};

export const getDateInfoFromMoment = (moment: Moment): DateInfo => {
  return {
    year: Number(moment.clone().get("year")),
    week: Number(moment.clone().format("W")),
  };
};

export const dateInfoToMoment = (dateInfo: DateInfo): Moment => {
  return moment().set("year", dateInfo.year).set("W", dateInfo.week);
};

export const getCurrentDateInfo = (): DateInfo => {
  return getDateInfoFromMoment(moment());
};

export const getDateInfoQuery = (dateInfo: DateInfo): string => {
  const query = serialize(dateInfo);

  return query;
};
