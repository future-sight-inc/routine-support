import { ActivityModel, ActivitySchema } from "@routine-support/domains";

export interface ActivityValidationData {
  isValid: boolean;
  errors?: {
    endTime: boolean;
  };
}

export const validateActivity = (
  activity: ActivitySchema
): ActivityValidationData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    return { isValid: false, errors: { endTime: true } };
  }

  return { isValid: true };
};
