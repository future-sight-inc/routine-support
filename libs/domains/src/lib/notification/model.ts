import { model, Schema } from "mongoose";
import { NotificationSchema } from "./types";

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
      type: Schema.Types.String,
      required: true,
    },
  },
  { versionKey: false, minimize: false }
);

export const NotificationModel = model<NotificationSchema>(
  "notification",
  notificationSchema
);
