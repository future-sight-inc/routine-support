import { useEffect, useState } from "react";

import {
  ActivityFilter,
  coachDayActions,
  createDayFromSchema,
  Student,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../app/hooks";
import { coachDayAPI } from "../../../services/ApiService";

export const useDay = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { day } = useAppSelector((state) => state.coachDay);
  const [currentDate, setCurrentDate] = useState(moment());

  const [activityFilter, setActivityFilter] = useState<ActivityFilter>({});

  useEffect(() => {
    getDay();
  }, [currentDate, activityFilter]);

  const getDay = async (config?: { silent: boolean }) => {
    try {
      !config?.silent && setLoading(true);

      const day = await coachDayAPI.getDay({ date: stringifyDate(currentDate), activityFilter });

      dispatch(coachDayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setDefaultActivityFilter = ({ students }: { students: Student[] }) => {
    const activityFilter = { common: true };

    students.forEach((student) => (activityFilter[student._id] = true));

    setActivityFilter(activityFilter);
  };

  return {
    models: { loading, day: day ? createDayFromSchema(day) : null, currentDate, activityFilter },
    operations: {
      getDay,
      onDateSelect: setCurrentDate,
      onActivityFilterSelect: setActivityFilter,
      setDefaultActivityFilter,
    },
  };
};
