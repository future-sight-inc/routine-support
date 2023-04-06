import { Activity } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { validateActivityImportance } from "./validateActivityImportance";
import { validateActivityTime } from "./validateActivityTime";

export const validateActivity = async (activity: Activity): Promise<SubmitErrorData> => {
  try {
    const validationData = validateActivityTime(activity);

    await validateActivityImportance(activity);

    return validationData;
  } catch (error) {
    return error as SubmitErrorData;
  }
};
