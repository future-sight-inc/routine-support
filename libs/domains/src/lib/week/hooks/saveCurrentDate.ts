import { stringifyDate } from "@routine-support/utils";
import { Moment } from "moment";

export const saveCurrentDate = (date: Moment) => {
  localStorage.setItem("currentDate", stringifyDate(date));
};
