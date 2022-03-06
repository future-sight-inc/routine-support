import { TIME_FORMAT, DATE_FORMAT } from "@routine-support/constants";
import { TimeString, DateString, TimeRange } from "@routine-support/types";
import * as moment from "moment";

export const stringifyTime = (time: moment.Moment): string => {
  return time.format(TIME_FORMAT);
};

export const stringifyDate = (date: moment.Moment): string => {
  return date.format(DATE_FORMAT);
};

export const serialize = (obj: {
  [key: string]: string | number | boolean;
}): string => {
  const str: string[] = [];

  for (const p in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
};

export const parseDate = (date: DateString) => moment(date, DATE_FORMAT);

export const parseTime = (
  time: TimeString,
  basisDate: moment.Moment | DateString = moment()
): moment.Moment => {
  // ! Грязная функция, убрать преобразование
  if (typeof basisDate === "string") {
    basisDate = parseDate(basisDate);
  }

  const [hours, minutes] = time.split(":");
  const newDate = moment(basisDate).set({
    hours: Number(hours),
    minutes: Number(minutes),
  });

  return newDate;
};

export const isToday = (date: moment.Moment) => {
  return stringifyDate(moment()) === stringifyDate(date);
};

export const getMinutes = (time: moment.Moment): number => {
  return time.get("hours") * 60 + time.get("minutes");
};

export const indexOfTimeRange = (
  timeRange: TimeRange,
  time: moment.Moment
): number => {
  return timeRange.findIndex((timeString) =>
    new RegExp(`^${time.get("hours")}:00`).test(timeString)
  );
};

export const pxToNumber = (px: string) => {
  return Number(px.split("px")[0]);
};
