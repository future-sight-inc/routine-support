import { Activity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createStudentActivityAPI } from "../../../coach";
import { createStudentDayAPI } from "../api";
import { DayState, studentDayActions } from "../slice";

interface State {
  studentDay: DayState;
}

interface Deps {
  studentDayApi: ReturnType<typeof createStudentDayAPI>;
  studentActivityApi: ReturnType<typeof createStudentActivityAPI>;
  useStoreState: () => State;
}

const useDay = ({ studentDayApi, studentActivityApi, useStoreState }: Deps) => {
  const {
    studentDay: { day },
  } = useStoreState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    getDay();
  }, [currentDate]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await getDay({ silent: true });
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getDay = async (config?: { silent: boolean }) => {
    try {
      !config?.silent && setLoading(true);

      const day = await studentDayApi.getDay(stringifyDate(currentDate));

      dispatch(studentDayActions.setDay(day));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmActivity = async (activity: Activity) => {
    try {
      await studentActivityApi.confirmActivity(activity);

      getDay({ silent: true });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    models: { loading, day, currentDate },
    operations: { getDay, confirmActivity, onDateSelect: setCurrentDate },
  };
};

export const createStudentUseDay = (deps: Deps) => () => useDay(deps);