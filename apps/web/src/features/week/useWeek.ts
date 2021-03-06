import { useEffect, useState } from "react";

import {
  ActivityFilter,
  createWeekFromSchema,
  DateInfo,
  dateInfoToMoment,
  getCurrentDateInfo,
  weekActions,
  WeekNumber,
  YearNumber,
} from "@routine-support/domains";
import moment from "moment";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useDateInfoQuery } from "../../hooks/useDateInfoQuery";
import { useSavedActivityFilter } from "../../hooks/useSavedActivityFilter";
import { useUpdateCurrentDateInfoQuery } from "../../hooks/useUpdateCurrentDateInfoQuery";
import { coachWeekAPI } from "../../services/ApiService";
import { LinkService } from "../../services/LinkService";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();
  const updateCurrentDateInfoQuery = useUpdateCurrentDateInfoQuery();
  const savedActivityFilter = useSavedActivityFilter();

  const currentDate = dateInfoQuery ? dateInfoToMoment(dateInfoQuery) : moment();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeek();
  }, []);

  // todo refactor args, add default config obj
  const getWeek = async (data?: {
    params?: {
      year: YearNumber;
      week: WeekNumber;
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

      const week = await coachWeekAPI.getWeek(
        date.year,
        date.week,
        data?.activityFilter || savedActivityFilter
      );

      dispatch(weekActions.setWeek(week));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateWeek = () => {
    if (window.location.pathname === LinkService.home()) {
      getWeek({ config: { silent: true } });
    }
  };

  return {
    models: {
      week: week ? createWeekFromSchema(week) : null,
      currentDate,
      loading,
      error,
    },
    operations: {
      getWeek,
      updateWeek,
    },
  };
};
