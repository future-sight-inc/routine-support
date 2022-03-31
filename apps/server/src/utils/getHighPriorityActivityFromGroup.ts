import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const getHighPriorityActivityFromGroup = (
  group: ActivitiesGroup
): Activity | undefined => {
  const firstFindCommon = group.activities.find(
    (activity) => activity.isCommon
  );
  const firstFindIndividual = group.activities.find(
    (activity) => !activity.isCommon
  );

  return firstFindIndividual || firstFindCommon;
};
