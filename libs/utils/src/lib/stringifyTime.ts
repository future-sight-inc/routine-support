import { format } from "date-fns";
import { TIME_FORMAT } from "./constants";

export const stringifyTime = (time: Date): string => {
  console.log(time);

  return format(time, TIME_FORMAT);
};
