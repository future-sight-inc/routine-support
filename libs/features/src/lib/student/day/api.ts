import { Day } from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";

export const createStudentDayAPI = (client: AxiosInstance) => ({
  getDay: async (date: string): Promise<Day> => {
    const response: AxiosResponse<Day> = await client.get(`/day/${date}`);

    return response.data;
  },
});
