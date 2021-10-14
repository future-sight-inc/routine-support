import { DateInfo } from "features/week/types";

import { useQueryParams } from "./useQueryParams";

export const useDateInfoQuery = (): DateInfo | undefined => {
  const query = useQueryParams();
  const year = query.get("year");
  const week = query.get("week");

  if (year && week) {
    console.log(year, week);

    return {
      year: Number(year),
      week: Number(week),
    };
  }

  return undefined;
};
