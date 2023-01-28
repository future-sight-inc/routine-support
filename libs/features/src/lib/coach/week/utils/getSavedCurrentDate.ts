import { parseDate } from "@routine-support/utils";

export const getSavedCurrentDate = () => {
  const savedCurrentDate = localStorage.getItem("currentDate");

  return savedCurrentDate ? parseDate(savedCurrentDate) : new Date();
};
