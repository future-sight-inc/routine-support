import moment from "moment";

import { formatDate } from "./formatDate";

export const isDateStringToday = (date: string) => {
  return formatDate(moment()) === date;
};
