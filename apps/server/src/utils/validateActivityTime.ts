import { ActivitySchema } from "@routine-support/domains";
import { FormError, SubmitErrorData } from "@routine-support/types";
import { parseTime } from "@routine-support/utils";

export const validateActivityTime = (
  activity: ActivitySchema
): SubmitErrorData => {
  const startTime = parseTime(activity.start);
  const endTime = parseTime(activity.end);

  if (startTime >= endTime) {
    const endError: FormError = {
      name: "end",
      message: "Invalid activity time error",
    };

    throw { isValid: false, errors: [endError] };
  }

  return { isValid: true };
};
