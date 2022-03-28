import { AxiosInstance, AxiosResponse } from "axios";

import { ActivityFilter, Week, WeekDto, WeekNumber, YearNumber } from "./types";
import { formatWeekDto } from "./utils";

export const createWeekAPI = (client: AxiosInstance) => ({
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

    const response: AxiosResponse<WeekDto> = await client.get(
      `/week/${year}/${week}`,
      { params: { filter: filterParam } }
    );

    return formatWeekDto(response.data);
  },
});
