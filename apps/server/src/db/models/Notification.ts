import { Notification } from "@routine-support/domains";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { model, Schema } from "mongoose";
import mongooseLeanGetters from "mongoose-lean-getters";

const notificationSchema = new Schema(
  {
    coachId: {
      type: Schema.Types.ObjectId,
      required: true,
      get: (id) => String(id),
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
      get: (date) => parseDate(date),
      set: (date) => stringifyDate(date),
    },
  },
  { versionKey: false, minimize: false }
);

notificationSchema.plugin(mongooseLeanGetters);

export const NotificationModel = model<Notification>("notification", notificationSchema);
