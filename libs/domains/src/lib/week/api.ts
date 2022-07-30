import { AxiosInstance, AxiosResponse } from "axios";

import { ActivityFilter, WeekNumber, WeekSchema, YearNumber } from "./types";
import { createActivityFilterParam } from "./utils/createActivityFilterParam";

export const createCoachWeekAPI = (client: AxiosInstance) => ({
  getWeek: async (
    year: YearNumber,
    week: WeekNumber,
    filter?: ActivityFilter
  ): Promise<WeekSchema> => {
    const response: AxiosResponse<WeekSchema> = await client.get(`/week/${year}/${week}`, {
      params: { filter: createActivityFilterParam(filter) },
    });

    return response.data;
  },
});
