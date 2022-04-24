import { DateInfo } from "@routine-support/domains";
import { Moment } from "moment";

export const getDateInfoFromMoment = (moment: Moment): DateInfo => {
  return {
    year: Number(moment.clone().year()),
    week: Number(moment.clone().isoWeek()),
  };
};
