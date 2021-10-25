import { DateInfo } from "features/week/types";
import moment from "moment";

export const getCurrentDateInfo = (): DateInfo => {
  return {
    year: Number(moment().get("year")),
    // ! Баг с получением номера текущей недели
    week: Number(moment().get("week")) - 1,
  };
};
