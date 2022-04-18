import { TimeString } from "@routine-support/types";
import moment, { Moment } from "moment";

export const parseTime = (time: TimeString): Moment => {
  const [hours, minutes] = time.split(":");
  const newDate = moment().set({
    hours: Number(hours),
    minutes: Number(minutes),
  });

  return newDate;
};
