import { apiClient } from 'services/apiClient';

import { WeekNumber, YearNumber } from './types';

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const fetchWeek = async (year: YearNumber, week: WeekNumber) => {
  const request = await apiClient.get('/week', {
    params: { year, week },
  });

  return request.data;
};
