import {
  ActivityModel,
  ActivitySchema,
  createActivityFromSchema,
  isTimeCrossed,
} from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";

export const validateActivityImportance = async (
  activity: ActivitySchema
): Promise<SubmitErrorData | undefined> => {
  if (activity.isImportant) {
    const importantActivitySameDay = await ActivityModel.findOne({
      date: activity.date,
      isImportant: true,
    });

    if (
      importantActivitySameDay &&
      isTimeCrossed(
        createActivityFromSchema(activity),
        createActivityFromSchema(importantActivitySameDay)
      )
    ) {
      throw {
        isValid: false,
        error: "Important activity this day already exists",
      };
    }

    return;
  }

  return;
};
