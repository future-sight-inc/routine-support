import { AxiosResponse } from "axios";

import { Activity } from "./types";
import { formatActivity } from "./utils";

import { Id } from "@routine-support/types";
import { apiClient } from "@routine-support/api-client";

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const activityAPI = {
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.post(
      "/activity",
      formatActivity(data)
    );

    return request;
  },
  updateActivity: async ({
    _id,
    ...data
  }: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.put(
      `/activity/${_id}`,
      formatActivity(data)
    );

    return request;
  },
  deleteActivity: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.delete(`/activity/${id}`);

    return request;
  },
};
