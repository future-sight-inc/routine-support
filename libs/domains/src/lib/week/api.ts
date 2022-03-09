import { apiClient } from "@routine-support/api-client";
import { AxiosResponse } from "axios";

import { ActivityFilter, Week, WeekDto, WeekNumber, YearNumber } from "./types";
import { formatWeekDto } from "./utils";

export const weekAPI = {
  getWeek: async (
    year: YearNumber,
    week: WeekNumber,
    filter?: ActivityFilter
  ): Promise<Week> => {
    // todo resolve type
    let filterParam: any = undefined;

    if (filter) {
      filterParam = [];

      for (const key in filter) {
        if (filter[key]) {
          filterParam.push(key);
        }
      }

      filterParam = filterParam.join(",");
    }

    const response: AxiosResponse<WeekDto> = await apiClient.get(
      `/week/${year}/${week}`,
      {
        params: {
          filter: filterParam,
        },
      }
    );

    return formatWeekDto(response.data);
  },
};
