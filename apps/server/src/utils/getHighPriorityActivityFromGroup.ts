import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const getHighPriorityActivityFromGroup = (
  group: ActivitiesGroup
): Activity | undefined => {
  const firstFindIndividual = group.activities.find(
    (activity) => !activity.isCommon
  );
  const firstFindCommon = group.activities.find(
    (activity) => activity.isCommon
  );

  return firstFindIndividual || firstFindCommon;
};
