import { AxiosResponse } from "axios";
import { WeekDto } from "dtos/WeekDto";
import { apiClient } from "services/apiClient";
import { formatWeekDto } from "utils/formatWeekDto";

import { Week, WeekNumber, YearNumber } from "./types";

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const weekAPI = {
  getWeek: async (year: YearNumber, week: WeekNumber): Promise<Week> => {
    const request: AxiosResponse<WeekDto> = await apiClient.get(
      `/week/${year}/${week}`
    );

    return formatWeekDto(request.data);
  },
};
