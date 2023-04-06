import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { parseDate, parseTime, stringifyDate, stringifyTime } from "@routine-support/utils";
import { model, Schema } from "mongoose";
import mongooseLeanGetters from "mongoose-lean-getters";

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
      type: Schema.Types.String,
      required: true,
      get: (date) => parseDate(date),
      set: (date) => stringifyDate(date),
    },
    start: {
      type: Schema.Types.String,
      required: true,
      get: (date) => parseTime(date),
      set: (date) => stringifyTime(date),
    },
    end: {
      type: Schema.Types.String,
      required: true,
      get: (date) => parseTime(date),
      set: (date) => stringifyTime(date),
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
  {
    versionKey: false,
    minimize: false,
  }
);

activitySchema.plugin(mongooseLeanGetters);

export const ActivityModel = model<Activity>("activity", activitySchema);
