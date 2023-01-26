import {
  ActivityFilter,
  createWeekFromSchema,
  getDateInfoFromMoment,
} from "@routine-support/domains";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCoachWeekAPI } from "../api";
import { weekActions, WeekState } from "../slice";
import { getSavedActivityFilter, getSavedCurrentDate } from "../utils";

interface State {
  coachWeek: WeekState;
}

interface Deps {
  weekApi: ReturnType<typeof createCoachWeekAPI>;
  useStoreState: () => State;
}

const useWeek = ({ weekApi, useStoreState }: Deps) => {
  const {
    coachWeek: { week },
  } = useStoreState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeek();
  }, []);

  const getWeek = async (data?: { date?: Moment; activityFilter?: ActivityFilter }) => {
    try {
      const currentDateInfo = data?.date
        ? getDateInfoFromMoment(data?.date)
        : getDateInfoFromMoment(getSavedCurrentDate());
      const activityFilter = data?.activityFilter || getSavedActivityFilter();

      const week = await weekApi.getWeek(
        currentDateInfo.year,
        currentDateInfo.week,
        activityFilter
      );

      dispatch(weekActions.setWeek(week));
    } catch {
      setError("Error during fetching!");
    } finally {
      setLoading(false);
    }
  };

  return {
    models: {
      week: week ? createWeekFromSchema(week) : null,
      currentDate: getSavedCurrentDate(),
      loading,
      error,
    },
    operations: {
      getWeek,
    },
  };
};

export const createCoachUseWeek = (deps: Deps) => () => useWeek(deps);
