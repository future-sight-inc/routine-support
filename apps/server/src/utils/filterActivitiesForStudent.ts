import { ActivitySchema } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { filterActivityForStudent } from "./filterActivityForStudent";

export const filterActivitiesForStudent = (
  activities: ActivitySchema[],
  studentId: Id
): ActivitySchema[] => {
  return activities.filter((activity) =>
    filterActivityForStudent(activity, studentId)
  );
};
