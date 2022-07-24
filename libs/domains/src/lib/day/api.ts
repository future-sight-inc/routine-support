import { DateString } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { ActivityFilter } from "../week";
import { createActivityFilterParam } from "../week/utils/createActivityFilterParam";
import { DaySchema } from "./types";

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

export const createStudentDayAPI = (client: AxiosInstance) => ({
  getDay: async (date: DateString): Promise<DaySchema> => {
    const response: AxiosResponse<DaySchema> = await client.get(`/day/${date}`);

    return response.data;
  },
});
