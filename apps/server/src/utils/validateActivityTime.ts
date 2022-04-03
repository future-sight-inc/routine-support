import { ActivitySchema } from "@routine-support/domains";
import { FormError, SubmitErrorData } from "@routine-support/types";

export const validateActivityTime = (
  activity: ActivitySchema
): SubmitErrorData => {
  const startTime = activity.start;
  const endTime = activity.end;

  if (startTime >= endTime) {
    const end: FormError = { message: "Invalid time", type: "server" };

    return { isValid: false, errors: { end } };
  }

  return { isValid: true };
};
