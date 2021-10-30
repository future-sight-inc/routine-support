import {
  DateInfo,
  getCurrentDateInfo,
  weekActions,
  weekAPI,
  WeekNumber,
  YearNumber,
} from "@routine-support/models";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();
  const updateCurrentDateInfoQuery = useUpdateCurrentDateInfoQuery();

  const getWeek = async (
    year?: YearNumber,
    weekNumber?: WeekNumber,
    silent?: boolean
  ) => {
    try {
      !silent && setLoading(true);

      const date: DateInfo = {
        year: year || dateInfoQuery?.year || currentDateInfo.year,
        week: weekNumber || dateInfoQuery?.week || currentDateInfo.week,
      };

      updateCurrentDateInfoQuery(date);

      const week = await weekAPI.getWeek(date.year, date.week);

      dispatch(weekActions.setWeek(week));
    } catch (error) {
      // todo: Добавить сервис исключений
      console.error(error);
    } finally {
      !silent && setLoading(false);
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
