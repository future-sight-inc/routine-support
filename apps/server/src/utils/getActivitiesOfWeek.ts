import {
  ActivityModel,
  getDaysOfWeek,
  RepeatTypeEnum,
} from "@routine-support/domains";
import { Moment } from "moment";
import { repeatActivities } from "./repeatActivities";

export const getActivitiesOfWeek = async ({
  currentDate,
  coachId,
}: {
  currentDate: Moment;
  coachId: string;
}) => {
  const currentWeek = getDaysOfWeek({
    year: currentDate.year(),
    week: currentDate.isoWeek(),
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
