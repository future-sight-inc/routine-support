import { Moment } from "moment";
import { DATE_FORMAT } from "./constants";

export const stringifyDate = (date: Moment): string => {
  return date.format(DATE_FORMAT);
};
