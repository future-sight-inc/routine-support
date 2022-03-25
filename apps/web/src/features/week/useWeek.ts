import { useState } from "react";

import {
  ActivityFilter,
  DateInfo,
  getCurrentDateInfo,
  weekActions,
  WeekNumber,
  YearNumber,
} from "@routine-support/domains";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useSavedActivityFilter } from "../../hooks/useSavedActivityFilter";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";
import { weekAPI } from "../../services/ApiService";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();
  const updateCurrentDateInfoQuery = useUpdateCurrentDateInfoQuery();
  const savedActivityFilter = useSavedActivityFilter();

  const [error, setError] = useState<string | null>(null);

  // todo refactor args, add default config obj
  const getWeek = async (data?: {
    params?: {
      year?: YearNumber;
      week?: WeekNumber;
    };
    activityFilter?: ActivityFilter;
    config?: {
      silent?: boolean;
    };
  }) => {
    try {
      !data?.config?.silent && setLoading(true);

      const date: DateInfo = {
        year: data?.params?.year || dateInfoQuery?.year || currentDateInfo.year,
        week: data?.params?.week || dateInfoQuery?.week || currentDateInfo.week,
      };

      updateCurrentDateInfoQuery(date);

      const week = await weekAPI.getWeek(
        date.year,
        date.week,
        data?.activityFilter || savedActivityFilter
      );

      dispatch(weekActions.setWeek(week));
    } catch (error) {
      setError(error.message);
    } finally {
      !data?.config?.silent && setLoading(false);
    }
  };

  return {
    models: {
      week,
      loading,
      error,
    },
    operations: {
      getWeek,
    },
  };
};
