import { DateInfo } from "@routine-support/domains";
import moment from "moment";
import { getDateInfoFromMoment } from "./getDateInfoFromMoment";

export const getCurrentDateInfo = (): DateInfo => {
  return getDateInfoFromMoment(moment());
};
