import { apiClient } from 'services/apiClient';

import { Week, WeekNumber, YearNumber } from './types';

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const fetchWeek = async (
  year: YearNumber,
  week: WeekNumber
): Promise<Week> => {
  const request = await apiClient.get(`/week/${year}/${week}`);

  return request.data;
};
