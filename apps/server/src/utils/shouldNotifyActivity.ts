import {
  ActivitySchema,
  createActivityFromSchema,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";
import moment from "moment";

export const shouldNotifyActivity = (
  activitySchema: ActivitySchema,
  students: Student[]
): boolean => {
  const activity = createActivityFromSchema(activitySchema);
  const { pendingStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );
  const currentTime = moment();

  console.log(activity);

  return (
    pendingStudents.length > 0 &&
    !activity.confirmation[activitySchema.date]?.isNotified &&
    currentTime.isSameOrAfter(activity.end)
  );
};
