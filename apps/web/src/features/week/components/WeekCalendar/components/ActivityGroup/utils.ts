import { Activity, Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { Theme } from "apps/web/src/styled/theme";

export const getActivityColor = (activity: Activity, students: Student[]) => {
  if (activity.students && activity.students.length) {
    return students.find(
      (student) => student._id === (activity.students as Id[])[0]
    )?.color as string;
  }

  return Theme.palette.common.green;
};
