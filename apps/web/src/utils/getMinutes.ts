import { Moment } from "moment";

export const getMinutes = (time: Moment): number => {
  return time.get("hours") * 60 + time.get("minutes");
};
