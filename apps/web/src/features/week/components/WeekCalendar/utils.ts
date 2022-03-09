import { Activity } from "@routine-support/domains";
import moment from "moment";
import { Moment } from "moment";

interface ActivityGroup {
  start: Moment;
  end: Moment;
  activities: Activity[];
}

// todo refactor and add tests
export const groupActivities = (activities: Activity[]): ActivityGroup[] => {
  const groups: ActivityGroup[] = [];

  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    const filtered = groups.filter(
      (group) =>
        (group.start <= activity.start && group.end >= activity.end) ||
        (group.start >= activity.start && group.end <= activity.end)
    );

    if (filtered.length) {
      if (filtered.length === 1) {
        filtered[0].activities.push(activity);

        if (activity.start < filtered[0].start) {
          filtered[0].start = activity.start;
        }
        if (activity.end > filtered[0].end) {
          filtered[0].end = activity.end;
        }
      } else {
        let mergedActivities: Activity[] = [];
        filtered.forEach(
          (item) =>
            (mergedActivities = mergedActivities.concat(item.activities))
        );

        const mergedGroup: ActivityGroup = {
          start: moment(Math.min(...filtered.map((item) => item.start.unix()))),
          end: moment(Math.max(...filtered.map((item) => item.end.unix()))),
          activities: mergedActivities,
        };

        groups.push(mergedGroup);
      }
    } else {
      const newGroup = {
        start: activity.start,
        end: activity.end,
        activities: [activity],
      };

      groups.push(newGroup);
    }
  }

  return groups;
};
