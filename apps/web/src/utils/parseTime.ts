import moment from "moment";
import { Moment } from "moment";
import { TimeString, DateString } from "types/main";

import { parseDate } from "./parseDate";

export const parseTime = (
  time: TimeString,
  basisDate: Moment | DateString = moment()
): Moment => {
  if (typeof basisDate === "string") {
    basisDate = parseDate(basisDate);
  }

  const [hours, minutes] = time.split(":");

  basisDate.set("hours", Number(hours));
  basisDate.set("minutes", Number(minutes));

  return basisDate;
};
