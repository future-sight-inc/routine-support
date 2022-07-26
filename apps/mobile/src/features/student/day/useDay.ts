import { useEffect, useState } from "react";

import { Activity, createDayFromSchema } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { studentDayActions } from "apps/mobile/src/app/store";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../app/hooks";
import { studentActivityAPI, studentDayAPI } from "../../../services/ApiService";

export const useDay = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { day } = useAppSelector((state) => state.studentDay);

  useEffect(() => {
    getDay();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await getDay({ silent: true });
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getDay = async (config?: { silent: boolean }) => {
    try {
      !config?.silent && setLoading(true);

      const day = await studentDayAPI.getDay(stringifyDate(moment()));

      dispatch(studentDayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmActivity = async (activity: Activity) => {
    try {
      await studentActivityAPI.confirmActivity(activity);

      getDay({ silent: true });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    models: { loading, day: day ? createDayFromSchema(day) : null },
    operations: { getDay, confirmActivity },
  };
};
