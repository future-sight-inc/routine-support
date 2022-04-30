import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { NotificationsGroup, NotificationsGroupSchema } from "./types";
import { createNotificationsGroupFromSchema } from "./utils/createNotificationsGroupFromSchema";

export const createActivityApi = (client: AxiosInstance) => ({
  getNotifications: async (): Promise<NotificationsGroup[]> => {
    const response: AxiosResponse<NotificationsGroupSchema[]> =
      await client.get("/notifications");

    return response.data.map(createNotificationsGroupFromSchema);
  },
  viewNotification: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(
      `/notifications/view/${id}`
    );

    return request;
  },
  deleteNotification: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete(`/notifications/${id}`);

    return request;
  },
  deleteNotifications: async (): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete(`/notifications`);

    return request;
  },
});
