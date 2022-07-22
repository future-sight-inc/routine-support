import { AxiosInstance, AxiosResponse } from "axios";

import { ActivityFilter, Week, WeekNumber, WeekSchema, YearNumber } from "./types";
import { createWeekFromSchema } from "./utils";
import { createActivityFilterParam } from "./utils/createActivityFilterParam";

export const createCoachWeekAPI = (client: AxiosInstance) => ({
  getWeek: async (year: YearNumber, week: WeekNumber, filter?: ActivityFilter): Promise<Week> => {
    const response: AxiosResponse<WeekSchema> = await client.get(`/week/${year}/${week}`, {
      params: { filter: createActivityFilterParam(filter) },
    });

    return createWeekFromSchema(response.data);
  },
});
