import { CreateStudentDto, Student } from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";

export const createCoachStudentAPI = (client: AxiosInstance) => ({
  createStudent: async (data: CreateStudentDto) => {
    const request: AxiosResponse<Student> = await client.post("/student", data);

    return request;
  },
  updateStudent: async ({ _id, ...data }: Student): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.put(`/student/${_id}`, data);

    return request.data;
  },
  deleteStudent: async (id: string): Promise<AxiosResponse> => {
    const request = await client.delete(`/student/${id}`);

    return request;
  },
  getStudents: async (coachId: string): Promise<Student[]> => {
    const request: AxiosResponse<Student[]> = await client.get(`/student/coach/${coachId}`);

    return request.data;
  },
});
