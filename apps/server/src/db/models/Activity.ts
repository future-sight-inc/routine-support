import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { parseDate, parseTime, stringifyDate, stringifyTime } from "@routine-support/utils";
import { model, Schema } from "mongoose";

const activitySchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    pictogram: {
      type: Schema.Types.String,
      required: true,
    },
    date: {
      type: Schema.Types.Date,
      required: true,
      get: (date) => parseDate(date),
      set: (date) => stringifyDate(date),
    },
    start: {
      type: Schema.Types.Date,
      required: true,
      get: (date) => parseTime(date),
      set: (date) => stringifyTime(date),
    },
    end: {
      type: Schema.Types.Date,
      required: true,
      get: (date) => parseTime(date),
      set: (date) => stringifyDate(date),
    },
    coachId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    repeatType: {
      type: Schema.Types.Number,
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
  { versionKey: false, minimize: false, toObject: { getters: true } }
);

export const ActivityModel = model<Activity>("activity", activitySchema);
