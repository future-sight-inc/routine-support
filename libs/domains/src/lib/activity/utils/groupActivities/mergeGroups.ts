import { ActivitiesGroup } from "@routine-support/domains";

import { addActivityToGroup } from "../addActivityToGroup";

export const mergeGroups = (groups: ActivitiesGroup[]) => {
  const baseGroup = groups[0];

  for (let i = 1; i < groups.length; i++) {
    groups[i].activities.forEach((activity) =>
      addActivityToGroup(baseGroup, activity)
    );
  }

  return baseGroup;
};
