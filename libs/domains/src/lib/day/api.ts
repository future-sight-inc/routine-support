import { formatDayDto } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { Day, DayDto } from "./types";

export const createDayAPI = (client: AxiosInstance) => ({
  getDay: async (date: DateString): Promise<Day> => {
    const response: AxiosResponse<DayDto> = await client.get(`/day/${date}`);

    return formatDayDto(response.data);
  },
});
