import { getDaysOfWeek, RepeatTypeEnum } from "@routine-support/domains";
import { getISOWeek, getYear } from "date-fns";
import { ActivityModel } from "../db/models/Activity";
import { repeatActivities } from "./repeatActivities";

export const getActivitiesOfWeek = async ({
  currentDate,
  coachId,
}: {
  currentDate: Date;
  coachId: string;
}) => {
  const currentWeek = getDaysOfWeek({
    year: getYear(currentDate),
    week: getISOWeek(currentDate),
  });

  const activitiesWithoutRepeat = await ActivityModel.find({
    coachId,
    repeatType: RepeatTypeEnum.None,
  }).lean();

  let activitiesWithRepeat = await ActivityModel.find({
    coachId,
    repeatType: { $gt: RepeatTypeEnum.None },
  }).lean();

  activitiesWithRepeat = repeatActivities(activitiesWithRepeat, currentWeek);

  return [...activitiesWithoutRepeat, ...activitiesWithRepeat];
};
