import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import {
  CoachId,
  CreateStudentDto,
  LoginStudentDto,
  Student,
} from "./types";

export const createStudentAPI = (client: AxiosInstance) => ({
  login: async (data: LoginStudentDto): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.post(
      "/student/login",
      data
    );

    return request.data as Student;
  },
  logout: async () => {
    const request: AxiosResponse = await client.get("/student/logout");

    return request.data;
  },
  getStudent: async (): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.get("/student");

    return request.data as Student;
  },
  createStudent: async (data: CreateStudentDto) => {
    const request: AxiosResponse<Student> = await client.post(
      "/student",
      data
    );

    return request;
  },
  updateStudent: async ({ _id, ...data }: Student): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.put(
      `/student/${_id}`,
      data
    );

    return request.data as Student;
  },
  deleteStudent: async (id: Id): Promise<AxiosResponse> => {
    const request = await client.delete(`/student/${id}`);

    return request;
  },
  getStudents: async (coachId: CoachId): Promise<Student[]> => {
    const request: AxiosResponse<Student[]> = await client.get(
      `/student/coach/${coachId}`
    );

    return request.data as Student[];
  },
});
