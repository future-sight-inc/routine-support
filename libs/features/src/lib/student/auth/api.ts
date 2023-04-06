import { LoginStudentDto, Student } from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";

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
