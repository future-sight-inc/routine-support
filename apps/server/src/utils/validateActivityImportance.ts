import {
  ActivityModel,
  ActivitySchema,
  createActivityFromSchema,
  isTimeCrossed,
} from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/forms";

export const validateActivityImportance = async (
  activity: ActivitySchema
): Promise<SubmitErrorData | undefined> => {
  if (activity.isImportant) {
    const importantActivitySameDay = await ActivityModel.findOne({
      _id: { $ne: activity._id },
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
        error: "Overlapping important activity",
      };
    }

    return;
  }

  return;
};
