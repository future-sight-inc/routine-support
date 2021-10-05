import { formatDate } from "./formatDate";
import moment from "moment";

export const isDateStringToday = (date: string) => {
  return formatDate(moment()) === date;
};
