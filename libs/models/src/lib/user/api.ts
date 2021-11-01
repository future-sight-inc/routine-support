import { apiClient } from "@routine-support/api-client";
import { AxiosResponse } from "axios";

import {
  User,
  UserDto,
  UserLoginDto,
  UserRegisterDto,
  UserUpdateDto,
} from "./types";

export const userAPI = {
  login: async (data: UserLoginDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await apiClient.post(
      "/user/login",
      data
    );

    return request.data as User;
  },
  logout: async () => {
    const request: AxiosResponse = await apiClient.get("/user/logout");

    return request.data;
  },
  register: async (data: UserRegisterDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await apiClient.post("/user", data);

    return request.data as User;
  },
  getUser: async (): Promise<User> => {
    const request: AxiosResponse<UserDto> = await apiClient.get("/user");

    return request.data as User;
  },
  updateUser: async (data: UserUpdateDto): Promise<User> => {
    const request: AxiosResponse<UserDto> = await apiClient.put("/user", data);

    return request.data as User;
  },
};
