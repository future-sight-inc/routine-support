import { AxiosInstance, AxiosResponse } from "axios";

import { ActivityFilter, Week, WeekNumber, WeekSchema, YearNumber } from "./types";
import { createWeekFromSchema } from "./utils";

export const createCoachWeekAPI = (client: AxiosInstance) => ({
  getWeek: async (year: YearNumber, week: WeekNumber, filter?: ActivityFilter): Promise<Week> => {
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

    const response: AxiosResponse<WeekSchema> = await client.get(`/week/${year}/${week}`, {
      params: { filter: filterParam },
    });

    return createWeekFromSchema(response.data);
  },
});
