import { CreateStudentDto, Student } from "@routine-support/domains";
import { StudentModel } from "../db/models/Student";

export const StudentController = {
  create: async (data: CreateStudentDto, coachId: string): Promise<void> => {
    await StudentModel.create({ ...data, coachId });
  },
  update: async (id: string, data: Partial<Student>): Promise<void> => {
    await StudentModel.findByIdAndUpdate(id, {
      ...data,
    });
  },
  delete: async (id: string): Promise<void> => {
    await StudentModel.findByIdAndDelete(id);
  },
  getAllByCoachId: async (coachId: string): Promise<Student[]> => {
    const students = await StudentModel.find({ coachId });

    return students;
  },
};
