import { Moment } from "moment";

export const addWeekToMoment = (date: Moment): Moment => {
  return date.clone().add(1, "weeks");
};

export const subtractWeekFromMoment = (date: Moment): Moment => {
  return date.clone().subtract(1, "weeks");
};
