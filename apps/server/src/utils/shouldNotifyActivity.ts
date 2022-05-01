import {
  ActivitySchema,
  createActivityFromSchema,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import moment from "moment";

export const shouldNotifyActivity = (
  activity: ActivitySchema,
  students: Student[]
): boolean => {
  const { pendingStudents } = getActivityStatusesFromStudents(
    createActivityFromSchema(activity),
    students
  );
  const currentTime = moment();
  const activityEndTime = parseTime(activity.end);

  return (
    pendingStudents.length > 0 &&
    !activity.confirmation[activity.date]?.isNotified &&
    currentTime.isSameOrAfter(activityEndTime)
  );
};
