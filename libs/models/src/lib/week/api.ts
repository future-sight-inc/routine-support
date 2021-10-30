import { apiClient } from "@routine-support/api-client";
import { AxiosResponse } from "axios";

import { Week, WeekDto, WeekNumber, YearNumber } from "./types";
import { formatWeekDto } from "./utils";

export const weekAPI = {
  getWeek: async (year: YearNumber, week: WeekNumber): Promise<Week> => {
    const request: AxiosResponse<WeekDto> = await apiClient.get(
      `/week/${year}/${week}`
    );

    return formatWeekDto(request.data);
  },
};
