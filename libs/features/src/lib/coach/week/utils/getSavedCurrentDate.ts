import { parseDate } from "@routine-support/utils";
import moment from "moment";

export const getSavedCurrentDate = () => {
  const savedCurrentDate = localStorage.getItem("currentDate");

  return savedCurrentDate ? parseDate(savedCurrentDate) : moment();
};
