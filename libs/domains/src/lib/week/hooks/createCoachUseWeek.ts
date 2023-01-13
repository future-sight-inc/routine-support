import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoachWeekAPI } from "../api";
import { weekActions } from "../slice";
import { ActivityFilter, DateInfo, WeekNumber, YearNumber } from "../types";
import { createWeekFromSchema, dateInfoToMoment, getCurrentDateInfo } from "../utils";

interface Deps {
  weekApi: ReturnType<typeof createCoachWeekAPI>;
  useDateInfoQuery: () => DateInfo | undefined;
  useUpdateCurrentDateInfoQuery: () => (date: DateInfo) => void;
  useSavedActivityFilter: () => ActivityFilter | undefined;
}

export const createCoachUseWeek =
  ({ weekApi, useDateInfoQuery, useUpdateCurrentDateInfoQuery, useSavedActivityFilter }: Deps) =>
    () => {
      const [loading, setLoading] = useState(false);
      const { week } = useSelector((state: any) => state.coachWeek);
      const dispatch = useDispatch();

      const currentDateInfo = getCurrentDateInfo();

      const dateInfoQuery = useDateInfoQuery();
      const updateCurrentDateInfoQuery = useUpdateCurrentDateInfoQuery();
      const savedActivityFilter = useSavedActivityFilter();

      const currentDate = dateInfoQuery ? dateInfoToMoment(dateInfoQuery) : moment();

      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        if (!week) {
          getWeek();
        }
      }, []);

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

          const week = await weekApi.getWeek(
            date.year,
            date.week,
            data?.activityFilter || savedActivityFilter || []
          );

          dispatch(weekActions.setWeek(week));
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const updateWeek = () => {
        getWeek({ config: { silent: true } });
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
