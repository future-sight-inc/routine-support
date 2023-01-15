import { Moment } from "moment";

export const getTimeInHours = (time: Moment) => {
  return time.get("hours") + time.get("minutes") / 60;
};
