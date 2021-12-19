import { mobileApiClient } from "@routine-support/api-client";
import { formatDayDto } from "@routine-support/models";
import { DateString } from "@routine-support/types";
import { AxiosResponse } from "axios";
import { Day, DayDto } from "./types";

export const dayAPI = {
  getDay: async (date: DateString): Promise<Day> => {
    const response: AxiosResponse<DayDto> = await mobileApiClient.get(
      `/day/${date}`
    );

    return formatDayDto(response.data);
  },
};
