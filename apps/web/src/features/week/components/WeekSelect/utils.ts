import { DateInfo } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";

export const addWeeks = (values: DateInfo, amount: number) => {
  const newDate = moment()
    .year(values.year)
    .weeks(values.week)
    .add(amount, "w");

  return newDate;
};

export const getDateRange = (values: DateInfo) => {
  const date = moment().locale("ru").year(values.year).weeks(values.week);

  return {
    start: stringifyDate(date.startOf("w")),
    end: stringifyDate(date.endOf("w")),
  };
};
