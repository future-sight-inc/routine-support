import { Notification } from "@routine-support/domains";
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
    },
  },
  { versionKey: false, minimize: false }
);

export const NotificationModel = model<Notification>("notification", notificationSchema);
