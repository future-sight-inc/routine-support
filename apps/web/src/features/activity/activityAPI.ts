import { AxiosResponse } from "axios";
import { apiClient } from "services/apiClient";
import { Id } from "types/main";
import { Activity } from "./types";

// todo: Обработку ошибок вынести в отдельный сервис и использовать в интерсепторе
export const activityAPI = {
  getActivity: async (id: Id): Promise<Activity> => {
    const request = await apiClient.get(`/activity/${id}`);

    return request.data;
  },
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request = await apiClient.post("activity", data);

    return request;
  },
  updateActivity: async ({ id, ...data }: Activity): Promise<AxiosResponse> => {
    const request = await apiClient.put(`/activity/${id}`, data);

    return request;
  },
  deleteActivity: async (id: Id): Promise<AxiosResponse> => {
    const request = await apiClient.delete(`/activity/${id}`);

    return request;
  },
};
