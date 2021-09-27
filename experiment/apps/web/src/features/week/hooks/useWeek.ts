import { useState } from 'react';

import { useAppSelector } from 'app/hooks';
import { AppThunk } from 'app/store';

import { YearNumber, WeekNumber } from '../types';
import { fetchWeek } from '../weekAPI';
import { weekActions } from '../weekSlice';

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);

  const getWeek =
    (year: YearNumber, weekNumber: WeekNumber): AppThunk =>
    async (dispatch) => {
      try {
        setLoading(true);

        const week = await fetchWeek(year, weekNumber);

        dispatch(weekActions.setWeek(week));
      } catch (error) {
        // todo: Добавить сервис исключений
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  return {
    models: {
      week,
      loading,
    },
    operations: {
      getWeek,
    },
  };
};
