import { DATE_FORMAT } from "constants/DateFormat";

import { Moment } from "moment";

export const stringifyDate = (date: Moment): string => {
  return date.format(DATE_FORMAT);
};
