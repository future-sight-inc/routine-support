import { format } from "date-fns";
import { DATE_FORMAT } from "./constants";

export const stringifyDate = (date: Date): string => {
  return format(date, DATE_FORMAT);
};
