import { ActivitySchema } from "@routine-support/domains";
import { FormError, SubmitErrorData } from "@routine-support/types";

export const validateActivityTime = (
  activity: ActivitySchema
): SubmitErrorData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    const endError: FormError = {
      name: "end",
      message: "Invalid time",
      type: "server",
    };

    return { isValid: false, errors: [endError] };
  }

  return { isValid: true };
};
