import { ActivitiesGroup, Activity } from "@routine-support/domains";
import { getActivityImportanceValue } from "./getActivityImportanceValue";

export const getHighPriorityActivityFromGroup = (
  group: ActivitiesGroup
): Activity | undefined => {
  const maxImportance = Math.max(
    ...group.activities.map((activity) => getActivityImportanceValue(activity))
  );

  const firstMaxImportant = group.activities.find(
    (activity) => getActivityImportanceValue(activity) === maxImportance
  );

  return firstMaxImportant;
};
