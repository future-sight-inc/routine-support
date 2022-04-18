import {
  ActivitiesGroup,
  Activity,
  isTimeCrossed,
} from "@routine-support/domains";
import { addActivityToGroup } from "../addActivityToGroup";

import { makeGroupFromActivity } from "./makeGroupFromActivity";
import { mergeGroups } from "./mergeGroups";

export const groupActivities = (
  activities: Activity[] = []
): ActivitiesGroup[] => {
  let groups: ActivitiesGroup[] = [];

  activities.forEach((activity) => {
    const groupsOfActivity = groups.filter((group) =>
      isTimeCrossed(group, activity)
    );
    const otherGroups = groups.filter(
      (group) => !isTimeCrossed(group, activity)
    );
    const shouldMergeGroups = groupsOfActivity.length > 1;
    const groupOfActivity = groupsOfActivity[0];

    if (shouldMergeGroups) {
      const mergedGroup = mergeGroups(groupsOfActivity);

      groups = [...otherGroups, mergedGroup];

      return;
    }

    if (groupOfActivity) {
      addActivityToGroup(groupOfActivity, activity);
    } else {
      const newGroup = makeGroupFromActivity(activity);

      groups.push(newGroup);
    }
  });

  return groups;
};
