import { ActivityFilter, createActivityFilterParam, Day, DayJson, parseDayJson } from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";

export const createCoachDayAPI = (client: AxiosInstance) => ({
  getDay: async ({
    date,
    activityFilter,
  }: {
    date: string;
    activityFilter: ActivityFilter;
  }): Promise<Day> => {
    const response: AxiosResponse<DayJson> = await client.get(`/day/${date}`, {
      params: { filter: createActivityFilterParam(activityFilter) },
    });

    return parseDayJson(response.data);
  },
});
