import { ActivitiesGroup, Activity } from "@routine-support/domains";

import { addActivityToGroup } from "./addActivityToGroup";
import { makeGroupFromActivity } from "./makeGroupFromActivity";
import { shouldAddActivityToGroup } from "./shouldAddActivityToGroup";

export const groupActivities = (activities: Activity[]): ActivitiesGroup[] => {
  const groups: ActivitiesGroup[] = [];

  activities.forEach((activity) => {
    const groupOfActivity = groups.find((group) =>
      shouldAddActivityToGroup(group, activity)
    );

    if (groupOfActivity) {
      addActivityToGroup(groupOfActivity, activity);
    } else {
      const newGroup = makeGroupFromActivity(activity);
      groups.push(newGroup);
    }
  });

  return groups;
};




