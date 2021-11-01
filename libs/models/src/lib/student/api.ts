import { apiClient } from "@routine-support/api-client";
import { AxiosResponse } from "axios";
import { CoachId, Student, StudentDto, StudentLoginDto } from "./types";

export const authAPI = {
  login: async (data: StudentLoginDto): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.post(
      "/student/login",
      data
    );

    return request.data as Student;
  },
  logout: async () => {
    const request: AxiosResponse = await apiClient.get("/student/logout");

    return request.data;
  },
  create: async (data: StudentDto): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.post(
      "/student",
      data
    );

    return request.data as Student;
  },
  getStudent: async (): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.get("/student");

    return request.data as Student;
  },
  getStudents: async (coachId: CoachId): Promise<Student[]> => {
    const request: AxiosResponse<StudentDto[]> = await apiClient.get(
      "/student",
      { params: { coachId } }
    );

    return request.data as Student[];
  },
  updateStudent: async ({ _id, ...data }: StudentDto): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.put(
      `/student/${_id}`,
      data
    );

    return request.data as Student;
  },
};
