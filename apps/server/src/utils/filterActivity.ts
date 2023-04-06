import { Activity, ActivityFilterQuery } from "@routine-support/domains";

export const filterActivity = (
  activity: Activity,
  filter: ActivityFilterQuery = []
): boolean => {
  const isCommonActivity =
    !activity.students.length && filter.includes("common");

  if (isCommonActivity) {
    return true;
  }

  if (activity.students) {
    for (const student of activity.students) {
      if (filter.includes(student)) {
        return true;
      }
    }
  }

  return false;
};
