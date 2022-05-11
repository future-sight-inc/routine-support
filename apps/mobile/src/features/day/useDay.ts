import { useEffect, useState } from "react";

import { Activity, dayActions } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment, { Moment } from "moment";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../app/hooks";
import { activityAPI, dayAPI } from "../../services/ApiService";

export const useDay = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentDate = moment();
  const { day } = useAppSelector((state) => state.day);

  useEffect(() => {
    getDay(currentDate);
  }, []);

  const getDay = async (date: Moment = currentDate) => {
    try {
      setLoading(true);

      const day = await dayAPI.getDay(stringifyDate(date));

      dispatch(dayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmActivity = async (activity: Activity) => {
    try {
      setLoading(true);

      await activityAPI.confirmActivity(activity);

      getDay();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { models: { loading, day }, operations: { getDay, confirmActivity } };
};
