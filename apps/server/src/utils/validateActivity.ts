import { ActivityModel, ActivitySchema } from "@routine-support/domains";
import { FormError } from "@routine-support/types";
import { db } from "../db/mongodb";
import { filterActivitiesForStudent } from "./filterActivitiesForStudent";

export interface ActivityValidationData {
  isValid?: boolean;
  isIntersection?: boolean;
  errors?: { [key: string]: FormError };
}

export const validateActivity = (
  activity: ActivitySchema
): ActivityValidationData => {
  let activityData = validateActivityTime(activity);
  activityData = validateActivityIntersection(activity);
  // activities = filterActivitiesForStudent(activities, id);

  // const activityIntersection = validateActivityIntersection({activitiesOfDay: activities, activity: activity});

  return activityData;
};

export const validateActivityTime = (
  activity: ActivitySchema
): ActivityValidationData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    const end: FormError = { message: "Invalid time", type: "server" };

    return { isValid: false, errors: { end } };
  }

  return { isValid: true };
};

export const validateActivityIntersection =  (
  activity: ActivitySchema
): ActivityValidationData => {
  const date = activity.date;

  const activities = ActivityModel.find({ date }).lean(); 
  // activities = filterActivitiesForStudent(activities, )
  console.log(activities);
  

  for (let index = 0; index < Object.keys(activities).length; index++) {
    // const element = activities[index];
    
    if (!( activity.start > activities[index].end || activity.end < activities[index].start )) { //не получается обратиться к end и к start 
      return { isIntersection: true};
    }
  };
  

  return { isIntersection: false };
};
