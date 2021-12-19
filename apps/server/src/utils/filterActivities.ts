import { ActivitySchema } from "@routine-support/models";

export const filterActivities = (
  activities: ActivitySchema[],
  filter?: string[]
) => {
  if (!filter) {
    return [];
  }

  return activities.filter((activity) => {
    if (!activity.students && filter.includes("common")) {
      return true;
    }

    if (activity.students) {
      for (const student of activity.students) {
        if (filter.includes(student as string)) {
          return true;
        }
      }
    }

    return false;
  });
};
