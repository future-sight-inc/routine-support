import { stringifyDate } from "@routine-support/utils";

export const saveCurrentDate = (date: Date) => {
  localStorage.setItem("currentDate", stringifyDate(date));
};
