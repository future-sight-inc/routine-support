import { ActivityFilter, createActivityFilterParam, DaySchema } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";

export const createCoachDayAPI = (client: AxiosInstance) => ({
  getDay: async ({
    date,
    activityFilter,
  }: {
    date: DateString;
    activityFilter: ActivityFilter;
  }): Promise<DaySchema> => {
    const response: AxiosResponse<DaySchema> = await client.get(`/day/${date}`, {
      params: { filter: createActivityFilterParam(activityFilter) },
    });

    return response.data;
  },
});
