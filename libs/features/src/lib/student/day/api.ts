import { DaySchema } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";

export const createStudentDayAPI = (client: AxiosInstance) => ({
  getDay: async (date: DateString): Promise<DaySchema> => {
    const response: AxiosResponse<DaySchema> = await client.get(`/day/${date}`);

    return response.data;
  },
});
