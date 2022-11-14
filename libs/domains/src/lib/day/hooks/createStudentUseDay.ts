import { createStudentDayAPI } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Activity, createStudentActivityAPI } from "../../activity";
import { studentDayActions } from "../slice";
import { createDayFromSchema } from "../utils";

interface Deps {
  studentDayApi: ReturnType<typeof createStudentDayAPI>;
  studentActivityApi: ReturnType<typeof createStudentActivityAPI>;
}

export const createStudentUseDay =
  ({ studentDayApi, studentActivityApi }: Deps) =>
    () => {
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(false);
      const { day } = useSelector((state: any) => state.studentDay);

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

          const day = await studentDayApi.getDay(stringifyDate(moment()));

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
        models: { loading, day: day ? createDayFromSchema(day) : null },
        operations: { getDay, confirmActivity },
      };
    };
