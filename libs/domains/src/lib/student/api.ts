import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { CoachId, CreateStudentDto, LoginStudentDto, Student } from "./types";

export const createCoachStudentAPI = (client: AxiosInstance) => ({
  createStudent: async (data: CreateStudentDto) => {
    const request: AxiosResponse<Student> = await client.post("/student", data);

    return request;
  },
  updateStudent: async ({ _id, ...data }: Student): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.put(`/student/${_id}`, data);

    return request.data;
  },
  deleteStudent: async (id: Id): Promise<AxiosResponse> => {
    const request = await client.delete(`/student/${id}`);

    return request;
  },
  getStudents: async (coachId: CoachId): Promise<Student[]> => {
    const request: AxiosResponse<Student[]> = await client.get(`/student/coach/${coachId}`);

    return request.data;
  },
});

export const createStudentAuthAPI = (client: AxiosInstance) => ({
  getStudent: async (): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.get("/auth");

    return request.data;
  },
  login: async (data: LoginStudentDto): Promise<Student> => {
    const request: AxiosResponse<Student> = await client.post("/auth/login", data);

    return request.data;
  },
  logout: async () => {
    const request: AxiosResponse = await client.get("/auth/logout");

    return request.data;
  },
});
