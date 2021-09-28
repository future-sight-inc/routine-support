import { useState } from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";

import { YearNumber, WeekNumber } from "../types";
import { weekAPI } from "../weekAPI";
import { weekActions } from "../weekSlice";

export const useWeek = () => {
  const [loading, setLoading] = useState(false);
  const { week } = useAppSelector((state) => state.week);
  const dispatch = useAppDispatch();

  const getWeek = async (year: YearNumber, weekNumber: WeekNumber) => {
    try {
      setLoading(true);

      const week = await weekAPI.getWeek(year, weekNumber);

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
