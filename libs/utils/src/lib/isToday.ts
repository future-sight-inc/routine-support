import moment, { Moment } from "moment";
import { stringifyDate } from "./stringifyDate";

export const isToday = (date: Moment) => {
  return stringifyDate(moment()) === stringifyDate(date);
};
