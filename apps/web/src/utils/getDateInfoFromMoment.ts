import { DateInfo } from "features/week/types";
import { Moment } from "moment";

export const getDateInfoFromMoment = (moment: Moment): DateInfo => {
  return {
    year: Number(moment.get("year")),
    week: Number(moment.get("week")),
  };
};
