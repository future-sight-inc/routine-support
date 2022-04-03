import { ActivitySchema, Student } from "@routine-support/domains";
import { filterActivityForStudent } from "./filterActivityForStudent";

export const filterActivitiesForStudent = (
  activities: ActivitySchema[],
  student: Pick<Student, "_id">
): ActivitySchema[] => {
  return activities.filter((activity) =>
    filterActivityForStudent(activity, student)
  );
};
