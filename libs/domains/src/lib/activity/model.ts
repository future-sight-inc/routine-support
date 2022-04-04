import { model, Schema } from "mongoose";
import { ActivitySchema, RepeatTypeEnum } from "./types";

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pictogram: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    coachId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    repeatType: {
      type: Number,
      required: true,
      default: RepeatTypeEnum.None,
    },
    isCommon: {
      type: Schema.Types.Boolean,
      required: true,
      default: false,
    },
    isImportant: {
      type: Schema.Types.Boolean,
      required: true,
      default: false,
    },
    students: {
      type: Schema.Types.Array,
      default: [],
    },
    confirmation: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { versionKey: false, minimize: false }
);

export const ActivityModel = model<ActivitySchema>("activity", activitySchema);
