import { useEffect, useState } from "react";

import { Activity, dayActions } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../app/hooks";
import { activityAPI, dayAPI } from "../../../services/ApiService";

export const useDay = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { day } = useAppSelector((state) => state.day);

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

      const day = await dayAPI.getDay(stringifyDate(moment()));

      dispatch(dayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmActivity = async (activity: Activity) => {
    try {
      await activityAPI.confirmActivity(activity);

      getDay({ silent: true });
    } catch (error) {
      console.error(error);
    }
  };

  return { models: { loading, day }, operations: { getDay, confirmActivity } };
};
