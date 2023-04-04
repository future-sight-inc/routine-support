import { parse } from "date-fns";
import { TIME_FORMAT } from "./constants";

export const parseTime = (time: string, baseDate?: Date): Date => {
  return parse(time, TIME_FORMAT, baseDate || new Date());
};
