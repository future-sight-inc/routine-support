import { createDayFromSchema } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { Day, DaySchema } from "./types";

export const createDayAPI = (client: AxiosInstance) => ({
  getDay: async (date: DateString): Promise<Day> => {
    const response: AxiosResponse<DaySchema> = await client.get(`/day/${date}`);

    return createDayFromSchema(response.data);
  },
});
