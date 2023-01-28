import { Notification } from "@routine-support/domains";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { model, Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    coachId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    activity: {
      type: Schema.Types.Mixed,
      required: true,
    },
    isViewed: {
      type: Schema.Types.Boolean,
      default: false,
    },
    date: {
      type: Schema.Types.Date,
      required: true,
      get: (date) => parseDate(date),
      set: (date) => stringifyDate(date),
    },
  },
  { versionKey: false, minimize: false, toObject: { getters: true } }
);

export const NotificationModel = model<Notification>("notification", notificationSchema);
