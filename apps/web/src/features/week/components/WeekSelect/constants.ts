import moment from "moment";

export const defaultValues = {
  year: Number(moment().get("year")),
  // todo: Баг с получением номера текущей недели
  week: Number(moment().get("week") - 1),
};
