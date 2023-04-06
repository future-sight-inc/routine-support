import { Activity } from "@routine-support/domains";
import { FormError, SubmitErrorData } from "@routine-support/types";

export const validateActivityTime = (activity: Activity): SubmitErrorData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    const endError: FormError = {
      name: "end",
      message: "Invalid activity time error",
    };

    throw { isValid: false, errors: [endError] };
  }

  return { isValid: true };
};
