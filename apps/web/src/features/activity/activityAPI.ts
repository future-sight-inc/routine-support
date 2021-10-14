import { AxiosResponse } from "axios";
import { apiClient } from "services/apiClient";
import { Id } from "types/main";
import { formatActivity } from "utils/formatActivity";

import { Activity } from "./types";

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
