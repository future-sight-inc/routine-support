import {
  createDayFromSchema,
  Week,
  WeekSchema,
} from "@routine-support/domains";
import { createWeekInfoFromSchema } from "./createWeekInfoFromSchema";

export const createWeekFromSchema = (weekSchema: WeekSchema): Week => {
  const week: Week = {
    days: weekSchema.days.map(createDayFromSchema),
    weekInfo: createWeekInfoFromSchema(weekSchema.weekInfo),
  };

  return week;
};
