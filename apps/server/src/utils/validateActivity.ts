import { ActivitySchema } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { validateActivityImportance } from "./validateActivityImportance";
import { validateActivityTime } from "./validateActivityTime";

export const validateActivity = async (
  activity: ActivitySchema
): Promise<SubmitErrorData | undefined> => {
  try {
    validateActivityTime(activity);

    await validateActivityImportance(activity);

    return;
  } catch (error) {
    return error as SubmitErrorData;
  }
};
