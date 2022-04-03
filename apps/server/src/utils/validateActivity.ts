import { ActivitySchema } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";

import { validateActivityTime } from "./validateActivityTime";

export const validateActivity = (
  activity: ActivitySchema
): SubmitErrorData => {
  return validateActivityTime(activity);
};
