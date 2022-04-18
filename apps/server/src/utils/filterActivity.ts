import { ActivityFilterQuery, ActivitySchema } from "@routine-support/domains";

export const filterActivity = (
  activity: ActivitySchema,
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
