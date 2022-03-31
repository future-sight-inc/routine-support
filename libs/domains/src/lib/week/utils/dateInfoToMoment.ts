import { DateInfo } from "@routine-support/domains";
import moment, { Moment } from "moment";

export const dateInfoToMoment = (dateInfo: DateInfo): Moment => {
  return moment().set("year", dateInfo.year).set("W", dateInfo.week);
};
