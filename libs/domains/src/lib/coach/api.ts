import { AxiosInstance, AxiosResponse } from "axios";
import { Coach, LoginCoachDto, RegisterCoachDto, UpdateCoachDto } from "./types";

export const createCoachAuthAPI = (client: AxiosInstance) => ({
  login: async (data: LoginCoachDto): Promise<Coach> => {
    const request: AxiosResponse<Coach> = await client.post("/auth/login", data);

    return request.data as Coach;
  },
  logout: async () => {
    const request: AxiosResponse = await client.get("/auth/logout");

    return request.data;
  },
  register: async (data: RegisterCoachDto): Promise<Coach> => {
    const request: AxiosResponse<Coach> = await client.post("/auth", data);

    return request.data as Coach;
  },
  getCoach: async (): Promise<Coach> => {
    const request: AxiosResponse<Coach> = await client.get("/auth");

    return request.data as Coach;
  },
  updateCoach: async (data: UpdateCoachDto): Promise<Coach> => {
    const request: AxiosResponse<Coach> = await client.put("/auth", data);

    return request.data as Coach;
  },
  deleteCoach: async (): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete("/auth");

    return request;
  },
});
