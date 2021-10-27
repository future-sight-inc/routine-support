import { AxiosResponse } from "axios";
import { apiClient } from "services/apiClient";
import { formatWeekDto } from "utils/formatWeekDto";

import { Week, WeekDto, WeekNumber, YearNumber } from "./types";

export const weekAPI = {
  getWeek: async (year: YearNumber, week: WeekNumber): Promise<Week> => {
    const request: AxiosResponse<WeekDto> = await apiClient.get(
      `/week/${year}/${week}`
    );

    return formatWeekDto(request.data);
  },
};
