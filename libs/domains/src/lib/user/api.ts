import { AxiosInstance, AxiosResponse } from "axios";
import { LoginUserDto, RegisterUserDto, UpdateUserDto, User } from "./types";

export const createUserAPI = (client: AxiosInstance) => ({
  login: async (data: LoginUserDto): Promise<User> => {
    const request: AxiosResponse<User> = await client.post("/user/login", data);

    return request.data as User;
  },
  logout: async () => {
    const request: AxiosResponse = await client.get("/user/logout");

    return request.data;
  },
  register: async (data: RegisterUserDto): Promise<User> => {
    const request: AxiosResponse<User> = await client.post("/user", data);

    return request.data as User;
  },
  getUser: async (): Promise<User> => {
    const request: AxiosResponse<User> = await client.get("/user");

    return request.data as User;
  },
  updateUser: async (data: UpdateUserDto): Promise<User> => {
    const request: AxiosResponse<User> = await client.put("/user", data);

    return request.data as User;
  },
});
