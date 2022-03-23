import { ActivitySchema } from "@routine-support/domains";
import { FormError } from "@routine-support/types";

export interface ActivityValidationData {
  isValid: boolean,
  errors?: { [key: string]: FormError };
}

export const validateActivity = (
  activity: ActivitySchema
): ActivityValidationData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    const error: FormError = {message: 'Invalid time', type: 'server'};

    return { isValid: false, errors: { error }  };
  }

  return { isValid: true };
};
