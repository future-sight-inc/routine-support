import { DateInfo } from "@routine-support/domains";
import moment, { Moment } from "moment";

export const dateInfoToMoment = (dateInfo: DateInfo): Moment => {
  return moment().year(dateInfo.year).isoWeek(dateInfo.week);
};
