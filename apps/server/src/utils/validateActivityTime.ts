import { ActivitySchema } from "@routine-support/domains";
import { FormError } from "@routine-support/types";
import { ActivityValidationData } from "./validateActivity";

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
