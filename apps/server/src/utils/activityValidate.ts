import { ActivityModel, ActivitySchema } from "@routine-support/domains";

export interface ActivityValidationData {
  isValid: boolean;
  errors: {
    startTime: boolean;
    endTime: boolean;
  };
}

export const validateActivity = (
  activity: ActivitySchema
): ActivityValidationData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime > endTime) {
    console.log("старт больше конца");

    return { isValid: false, errors: { startTime: true, endTime: false } };
  }

  if (startTime == endTime) {
    console.log("равны");

    return { isValid: false, errors: { startTime: true, endTime: true } };
  }
  console.log(typeof startTime, startTime, endTime);

  return { isValid: true, errors: { startTime: false, endTime: false } };
};
