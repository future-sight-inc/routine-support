import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { NotificationsGroupSchema } from "./types";

export const createCoachNotificationAPI = (client: AxiosInstance) => ({
  getNotifications: async (): Promise<{
    notViewedCount: number;
    notificationsGroups: NotificationsGroupSchema[];
  }> => {
    const response: AxiosResponse<{
      notViewedCount: number;
      notificationsGroups: NotificationsGroupSchema[];
    }> = await client.get("/notifications");

    return {
      notViewedCount: response.data.notViewedCount,
      notificationsGroups: response.data.notificationsGroups,
    };
  },
  viewNotification: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(`/notifications/view/${id}`);

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
