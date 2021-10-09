import { AxiosResponse } from "axios";
import { ActivityDto } from "dtos/ActivityDto";
import { apiClient } from "services/apiClient";
import { Id } from "types/main";
import { formatActivity } from "utils/formatActivity";
import { formatActivityDto } from "utils/formatActivityDto";

import { Activity } from "./types";

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const activityAPI = {
  getActivity: async (id: Id): Promise<Activity> => {
    const request: AxiosResponse<ActivityDto> = await apiClient.get(
      `/activity/${id}`
    );

    return formatActivityDto(request.data);
  },
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.post(
      "/activity",
      formatActivity(data)
    );

    return request;
  },
  updateActivity: async ({ id, ...data }: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.put(`/activity/${id}`, data);

    return request;
  },
  deleteActivity: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await apiClient.delete(`/activity/${id}`);

    return request;
  },
};
