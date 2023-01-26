import { useEffect, useState } from "react";

import { ActivityFilter, createDayFromSchema, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createCoachDayAPI } from "../api";
import { coachDayActions, DayState } from "../slice";

interface State {
  coachDay: DayState;
}

interface Deps {
  dayApi: ReturnType<typeof createCoachDayAPI>;
  useStoreState: () => State;
}

const useDay = ({ dayApi, useStoreState }: Deps) => {
  const {
    coachDay: { day },
  } = useStoreState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [currentDate, setCurrentDate] = useState(moment());

  const [activityFilter, setActivityFilter] = useState<ActivityFilter>([]);

  useEffect(() => {
    getDay();
  }, [currentDate, activityFilter]);

  const getDay = async (data?: { config?: { silent: boolean } }) => {
    try {
      !data?.config?.silent && setLoading(true);

      const day = await dayApi.getDay({ date: stringifyDate(currentDate), activityFilter });

      dispatch(coachDayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setDefaultActivityFilter = ({ students }: { students: Student[] }) => {
    const activityFilter = ["common"];

    students.forEach((student) => activityFilter.push(student._id));

    setActivityFilter(activityFilter);
  };

  return {
    models: {
      loading,
      day: day ? createDayFromSchema(day) : null,
      currentDate,
      activityFilter,
    },
    operations: {
      getDay,
      onDateSelect: setCurrentDate,
      onActivityFilterSelect: setActivityFilter,
      setDefaultActivityFilter,
    },
  };
};

export const createCoachUseDay = (deps: Deps) => () => useDay(deps);
