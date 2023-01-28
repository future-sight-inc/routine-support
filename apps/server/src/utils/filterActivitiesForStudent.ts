import { Activity, Student } from "@routine-support/domains";
import { filterActivityForStudent } from "./filterActivityForStudent";

export const filterActivitiesForStudent = (
  activities: Activity[],
  student: Pick<Student, "_id">
): Activity[] => {
  return activities.filter((activity) => filterActivityForStudent(activity, student));
};
