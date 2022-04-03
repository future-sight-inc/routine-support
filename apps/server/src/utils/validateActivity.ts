import { ActivitySchema } from "@routine-support/domains";
import { FormError } from "@routine-support/types";

export interface ActivityValidationData {
  isValid?: boolean;
  isIntersection?: boolean;
  errors?: { [key: string]: FormError };
}

import { validateActivityTime } from "./validateActivityTime";

export const validateActivity = (
  activity: ActivitySchema
): ActivityValidationData => {
  return validateActivityTime(activity);
};
