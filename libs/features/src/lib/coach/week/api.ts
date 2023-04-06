import { ActivityFilter, parseWeekJson, Week, WeekJson } from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";
import { createActivityFilterParam } from "libs/domains/src/lib/week/utils/createActivityFilterParam";

export const createCoachWeekAPI = (client: AxiosInstance) => ({
  getWeek: async (year: number, week: number, filter: ActivityFilter): Promise<Week> => {
    const response: AxiosResponse<WeekJson> = await client.get(`/week/${year}/${week}`, {
      params: { filter: createActivityFilterParam(filter) },
    });

    return parseWeekJson(response.data);
  },
});