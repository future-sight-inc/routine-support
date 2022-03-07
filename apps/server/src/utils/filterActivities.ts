import { ActivityFilterQuery, ActivitySchema } from "@routine-support/domains";

export const filterActivities = (
  activities: ActivitySchema[],
  filter: ActivityFilterQuery = []
) => {
  return activities.filter((activity) => {
    const isCommonActivity = !activity.students && filter.includes("common");

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
  });
};
