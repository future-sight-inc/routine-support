import { Activity } from "features/activity/types";
import { Week } from "features/week/types";
import { TimeString } from "types/main";

export const getTimeRange = (week: Week): TimeString[] => {
  return Object.keys(week.days[0].activities);
};

export const getActivitiesArray = (week: Week): Activity[] => {
  return Object.keys(week.days[0].activities).map(
    (time) => week.days[0].activities[time]
  );
};
