import moment, { Moment } from "moment";

import { formatDate } from "./formatDate";

export const isToday = (date: Moment) => {
  return formatDate(moment()) === formatDate(date);
};
