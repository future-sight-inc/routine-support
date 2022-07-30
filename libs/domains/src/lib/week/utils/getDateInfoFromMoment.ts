import { DateInfo } from "@routine-support/domains";
import { Moment } from "moment";

export const getDateInfoFromMoment = (moment: Moment): DateInfo => {
  return {
    year: Number(moment.clone().locale("ru").startOf("week").year()),
    week: Number(moment.clone().locale("ru").startOf("week").isoWeek()),
  };
};
