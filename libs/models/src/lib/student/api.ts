import { apiClient } from "@routine-support/api-client";
import { Id } from "@routine-support/types";
import { AxiosResponse } from "axios";
import { CoachId, NewStudentDto, Student, StudentDto, StudentLoginDto } from "./types";

export const studentAPI = {
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
  getStudent: async (): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.get("/student");

    return request.data as Student;
  },
  createStudent: async (data: NewStudentDto) => {
    const request: AxiosResponse = await apiClient.post("/student", data);

    return request;
  },
  updateStudent: async ({ _id, ...data }: StudentDto): Promise<Student> => {
    const request: AxiosResponse<StudentDto> = await apiClient.put(
      `/student/${_id}`,
      data
    );

    return request.data as Student;
  },
  deleteStudent: async (id: Id): Promise<AxiosResponse> => {
    const request = await apiClient.delete(`/student/${id}`);

    return request;
  },
  getStudents: async (coachId: CoachId): Promise<Student[]> => {
    const request: AxiosResponse<StudentDto[]> = await apiClient.get(
      `/student/coach/${coachId}`
    );

    return request.data as Student[];
  },
};
