import {
  ActivityModel,
  CoachModel,
  NotificationModel,
  setActivityNotified,
  StudentModel,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import moment from "moment";
import { getActivitiesOfWeek } from "./getActivitiesOfWeek";
import { shouldNotifyActivity } from "./shouldNotifyActivity";

export const checkTodaysActivitiesConfirmationAndNotify = async () => {
  const coaches = await CoachModel.find().lean();

  coaches.forEach(async (coach) => {
    const currentDate = moment();
    const coachStudents = await StudentModel.find({
      coachId: coach._id,
    }).lean();

    const activitiesOfWeek = await getActivitiesOfWeek({
      currentDate,
      coachId: coach._id,
    });
    const todaysActivities = activitiesOfWeek.filter(
      (activity) => activity.date === stringifyDate(currentDate)
    );
    const activitiesToNotify = todaysActivities.filter((activity) =>
      shouldNotifyActivity(activity, coachStudents)
    );

    activitiesToNotify.forEach(async (activity) => {
      const { _id, ...activityData } = activity;

      await NotificationModel.create({
        activity,
        coachId: coach._id,
        date: activity.date,
      });
      setActivityNotified(activity, true);
      await ActivityModel.findByIdAndUpdate(_id, activityData);
    });
  });
};
