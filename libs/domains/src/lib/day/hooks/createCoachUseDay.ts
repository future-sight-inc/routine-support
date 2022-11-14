import { useEffect, useState } from "react";

import {
  ActivityFilter,
  coachDayActions,
  createCoachDayAPI,
  createDayFromSchema,
  Student,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

interface Deps {
  dayApi: ReturnType<typeof createCoachDayAPI>;
}

export const createCoachUseDay =
  ({ dayApi }: Deps) =>
    () => {
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(false);
      const { day } = useSelector((state: any) => state.coachDay);
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
        models: { loading, day: day ? createDayFromSchema(day) : null, currentDate, activityFilter },
        operations: {
          getDay,
          onDateSelect: setCurrentDate,
          onActivityFilterSelect: setActivityFilter,
          setDefaultActivityFilter,
        },
      };
    };
