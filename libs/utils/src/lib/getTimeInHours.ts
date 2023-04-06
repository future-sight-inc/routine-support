import { getHours, getMinutes } from "date-fns";

export const getTimeInHours = (time: Date) => {
  return getHours(time) + getMinutes(time) / 60;
};
