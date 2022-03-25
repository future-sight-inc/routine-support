import { AxiosInstance, AxiosResponse } from "axios";
import {
  User,
  UserDto,
  UserLoginDto,
  UserRegisterDto,
  UserUpdateDto,
} from "./types";

export const createUserAPI = (client: AxiosInstance) => ({
  login: async (data: UserLoginDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await client.post(
      "/user/login",
      data
    );

    return request.data as User;
  },
  logout: async () => {
    const request: AxiosResponse = await client.get("/user/logout");

    return request.data;
  },
  register: async (data: UserRegisterDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await client.post("/user", data);

    return request.data as User;
  },
  getUser: async (): Promise<User> => {
    const request: AxiosResponse<UserDto> = await client.get("/user");

    return request.data as User;
  },
  updateUser: async (data: UserUpdateDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await client.put("/user", data);

    return request.data as User;
  },
});
