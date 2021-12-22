import { DateInfo } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";

// ! Перенести в utils
export const addWeeks = (values: DateInfo, amount: number) => {
  const date = moment().year(values.year).weeks(values.week);

  const newDate = moment()
    .year(values.year)
    .weeks(values.week)
    .add(amount, "w");

  // ! библиотека не умеет обновлять год после добавления недели
  if (newDate.get("week") === 1 && newDate.get("week") < date.get("week")) {
    return moment([values.year + 1, 0, 1]);
  }

  return newDate;
};

export const getDateRange = (values: DateInfo) => {
  // ! Локализация
  const date = moment().locale("ru").year(values.year).weeks(values.week);

  return {
    start: stringifyDate(date.startOf("w")),
    end: stringifyDate(date.endOf("w")),
  };
};
