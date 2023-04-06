import { Activity, confirmStudentActivity, Student } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { ActivityModel } from "../db/models/Activity";
import { SubmitErrorData } from "@routine-support/types";
import { validateActivity } from "../utils/validateActivity";

export const ActivityController = {
  create: async (data: Activity, coachId: string): Promise<SubmitErrorData> => {
    const validationData = await validateActivity(data);

    if (validationData.isValid) {
      await ActivityModel.create({
        ...data,
        coachId,
        confirmation: {},
      });
    }

    return validationData;
  },
  update: async (id: string, data: Activity): Promise<SubmitErrorData> => {
    const validationData = await validateActivity(data);

    if (validationData.isValid) {
      await ActivityModel.findByIdAndUpdate(id, {
        ...data,
        confirmation: {},
      });
    }

    return validationData;
  },
  delete: async (id: string): Promise<void> => {
    await ActivityModel.findByIdAndDelete(id);
  },
  getStudentActivities: async (studentId: string, date?: Date): Promise<Activity[]> => {
    const activities = await ActivityModel.find({
      students: { $in: [studentId] },
      date,
    });

    return activities;
  },
  getActivities: async ({
    date,
    coachId,
  }: {
    date?: Date;
    coachId?: string;
  }): Promise<Activity[]> => {
    const activities = await ActivityModel.find({ date, coachId }).lean({ getters: true });

    return activities;
  },
  removeStudentFromActivity: async (studentId: string, activity: Activity): Promise<void> => {
    const filteredStudents = activity.students.filter((id) => id !== studentId);
    const shouldDeleteStudentActivity = !filteredStudents.length;

    if (shouldDeleteStudentActivity) {
      ActivityModel.findByIdAndDelete(activity._id);
    } else {
      ActivityModel.findByIdAndUpdate(activity._id, {
        students: filteredStudents,
      });
    }
  },
  removeStudentFromAllActivities: async (studentId: string) => {
    const studentsActivities = await ActivityController.getStudentActivities(studentId);

    await Promise.all(
      studentsActivities.map((activity) =>
        ActivityController.removeStudentFromActivity(studentId, activity)
      )
    );
  },
  confirmActivity: async (activityId: string, date: string, student: Student) => {
    const activityToConfirm = await ActivityModel.findById(activityId);

    if (activityToConfirm) {
      confirmStudentActivity({
        student,
        activity: activityToConfirm,
        confirmationDate: parseDate(date),
      });

      await ActivityController.update(activityId, activityToConfirm);
    }
  },
};
