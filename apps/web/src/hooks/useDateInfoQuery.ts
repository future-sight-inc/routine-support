import { DateInfo } from "@routine-support/models";
import { useQueryParams } from "./useQueryParams";

export const useDateInfoQuery = (): DateInfo | undefined => {
  const query = useQueryParams();
  const year = query.get("year");
  const week = query.get("week");

  if (year && week) {
    return {
      year: Number(year),
      week: Number(week),
    };
  }

  return undefined;
};
