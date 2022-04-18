import { DATE_FORMAT } from "@routine-support/constants";
import { Moment } from "moment";

export const stringifyDate = (date: Moment): string => {
  return date.format(DATE_FORMAT);
};
