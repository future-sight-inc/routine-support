import { Coach, LoginCoachDto, RegisterCoachDto, Student } from "@routine-support/domains";
import { CoachModel } from "../db/models/Coach";
import { getAuthCookie } from "../utils/getAuthCookie";
import { AuthNames } from "../constants/AuthNames";
import { SubmitErrorData } from "@routine-support/types";
import { hashPassword } from "../utils/hashPassword";
import { validateCoach } from "../utils/validateCoach";
import { Cookie } from "../types/Cookie";
import { StudentModel } from "../db/models/Student";
import { ActivityModel } from "../db/models/Activity";
import { NotificationModel } from "../db/models/Notification";

export const AuthController = {
  registerCoach: async (
    data: RegisterCoachDto
  ): Promise<{ coach?: Coach; cookie?: Cookie; validationData: SubmitErrorData }> => {
    const validationData = await validateCoach(data);

    if (!validationData?.isValid) {
      return { validationData };
    }

    const coach = await CoachModel.create({
      ...data,
      email: data.email.toLowerCase(),
      password: hashPassword(data.password),
    });

    return {
      coach,
      cookie: getAuthCookie(AuthNames.Coach, coach),
      validationData,
    };
  },
  loginCoach: async (
    data: LoginCoachDto
  ): Promise<{ coach?: Coach; cookie?: Cookie; validationData: SubmitErrorData }> => {
    const validationData = await validateCoach(data);

    console.log(data, validationData);

    if (!validationData?.isValid) {
      return { validationData };
    }

    const coach = await CoachModel.findOne({
      email: data.email.toLowerCase(),
      password: hashPassword(data.password),
    }).exec();

    if (!coach) {
      return { validationData };
    }

    return {
      coach,
      cookie: getAuthCookie(AuthNames.Coach, coach),
      validationData,
    };
  },
  deleteCoach: async (coachId: string): Promise<void> => {
    await CoachModel.findByIdAndDelete(coachId);
    await StudentModel.deleteMany({ coachId });
    await ActivityModel.deleteMany({ coachId });
    await NotificationModel.deleteMany({ coachId });
  },
  loginStudent: async (studentId: string): Promise<{ student?: Student; cookie?: Cookie }> => {
    const student = await StudentModel.findById(studentId);

    if (!student) {
      return {};
    }

    return {
      student,
      cookie: getAuthCookie(AuthNames.Student, student),
    };
  },
};
