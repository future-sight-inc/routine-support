import { AxiosResponse } from "axios";
import { ActivityDto } from "dtos/ActivityDto";
import { DayDto } from "dtos/DayDto";
import { WeekDto } from "dtos/WeekDto";
import { Activity } from "features/activity/types";
import { Day } from "features/day/types";
import moment from "moment";
import { apiClient } from "services/apiClient";
import { parseDate } from "utils/parseDate";

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

const formatWeekDto = (weekDto: WeekDto): Week => {
  const week: Week = {
    days: weekDto.days.map(formatDayDto),
    weekNumber: weekDto.weekNumber,
    year: weekDto.year,
  };

  return week;
};

const formatDayDto = (dayDto: DayDto): Day => {
  const day: Day = {
    date: parseDate(dayDto.date),
    activities: dayDto.activities.map(formatActivityDto),
  };

  return day;
};

const formatActivityDto = (activityDto: ActivityDto): Activity => {
  return {
    ...activityDto,
    date: moment(),
    start: moment(),
    end: moment(),
  };
};
