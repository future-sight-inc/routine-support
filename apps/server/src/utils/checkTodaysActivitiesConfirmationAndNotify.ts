import { setActivityNotified, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { ActivityModel } from "../db/models/Activity";
import { CoachModel } from "../db/models/Coach";
import { NotificationModel } from "../db/models/Notification";
import { StudentModel } from "../db/models/Student";
import { emitToUser } from "../main";
import { getActivitiesOfWeek } from "./getActivitiesOfWeek";
import { shouldNotifyActivity } from "./shouldNotifyActivity";

export const checkTodaysActivitiesConfirmationAndNotify = async () => {
  const coaches = await CoachModel.find().lean();

  coaches.forEach(async (coach) => {
    const currentDate = new Date();
    const coachStudents = await StudentModel.find({
      coachId: coach._id,
    }).lean();

    const activitiesOfWeek = await getActivitiesOfWeek({
      currentDate,
      coachId: coach._id,
    });

    const todaysActivities = activitiesOfWeek.filter(
      (activity) => activity.date === currentDate
    );

    const activitiesToNotify = todaysActivities.filter((activity) =>
      shouldNotifyActivity(activity, coachStudents)
    );

    if (activitiesToNotify.length) {
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

      emitToUser({
        userId: coach._id,
        userType: SocketUserTypeEnum.Coach,
        message: {
          type: WeekSocketEventTypeEnum.UpdateNotifications,
        },
      });
    }
  });
};
