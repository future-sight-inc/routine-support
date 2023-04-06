import { Activity, isTimeCrossed } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { ActivityModel } from "../db/models/Activity";

export const validateActivityImportance = async (
  activity: Activity
): Promise<SubmitErrorData | undefined> => {
  if (activity.isImportant) {
    const importantActivitySameDay = await ActivityModel.findOne({
      _id: { $ne: activity._id },
      date: activity.date,
      isImportant: true,
    });

    if (importantActivitySameDay && isTimeCrossed(activity, importantActivitySameDay)) {
      throw {
        isValid: false,
        error: "Overlapping important activity",
      };
    }

    return;
  }

  return;
};
