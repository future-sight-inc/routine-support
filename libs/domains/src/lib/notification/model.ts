import { model, Schema } from "mongoose";
import { ActivityModel } from "../activity";

const notificationSchema = new Schema({
  coachId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  activity: {
    type: ActivityModel,
    required: true,
  },
  isViewed: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

export const NotificationModel = model<Notification>(
  "notification",
  notificationSchema
);
