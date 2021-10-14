import { useState } from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { useDateInfoQuery } from "hooks/useDateInfoQuery";
import { getCurrentDateInfo } from "utils/getCurrentDateInfo";

import { WeekNumber, YearNumber } from "../types";
import { weekAPI } from "../weekAPI";
import { weekActions } from "../weekSlice";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const dateInfoQuery = useDateInfoQuery();
  const currentDateInfo = getCurrentDateInfo();

  const getWeek = async (year?: YearNumber, weekNumber?: WeekNumber) => {
    try {
      setLoading(true);

      const week = await weekAPI.getWeek(
        year || dateInfoQuery?.year || currentDateInfo.year,
        weekNumber || dateInfoQuery?.week || currentDateInfo.week
      );

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
