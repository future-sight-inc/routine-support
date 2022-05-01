import { DateString, TimeString } from "@routine-support/types";
import moment, { Moment } from "moment";

export const parseTime = (time: TimeString, baseDate?: DateString): Moment => {
  if (baseDate) {
    return moment(`${baseDate} ${time}`, "DD.MM.YYYY hh:mm");
  } else {
    return moment(time, "hh:mm");
  }
};
