import { useState } from "react";

import {
  DateInfo,
  getCurrentDateInfo,
  weekActions,
  weekAPI,
  WeekNumber,
  YearNumber,
} from "@routine-support/models";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useSavedActivityFilter } from "../../hooks/useSavedActivityFilter";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();
  const updateCurrentDateInfoQuery = useUpdateCurrentDateInfoQuery();
  const savedActivityFilter = useSavedActivityFilter();

  const getWeek = async (
    params?: {
      year?: YearNumber;
      week?: WeekNumber;
    },
    config?: {
      silent?: boolean;
    }
  ) => {
    try {
      !config?.silent && setLoading(true);

      const date: DateInfo = {
        year: params?.year || dateInfoQuery?.year || currentDateInfo.year,
        week: params?.week || dateInfoQuery?.week || currentDateInfo.week,
      };

      updateCurrentDateInfoQuery(date);

      const week = await weekAPI.getWeek(
        date.year,
        date.week,
        savedActivityFilter
      );

      dispatch(weekActions.setWeek(week));
    } catch (error) {
      console.error(error);
    } finally {
      !config?.silent && setLoading(false);
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
