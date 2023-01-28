import {
  NotificationsGroup,
  NotificationsGroupJson,
  parseNotificationsGroupJson,
} from "@routine-support/domains";
import { AxiosInstance, AxiosResponse } from "axios";

export const createCoachNotificationAPI = (client: AxiosInstance) => ({
  getNotifications: async (): Promise<{
    notViewedCount: number;
    notificationsGroups: NotificationsGroup[];
  }> => {
    const response: AxiosResponse<{
      notViewedCount: number;
      notificationsGroups: NotificationsGroupJson[];
    }> = await client.get("/notifications");

    return {
      notViewedCount: response.data.notViewedCount,
      notificationsGroups: response.data.notificationsGroups.map(parseNotificationsGroupJson),
    };
  },
  viewNotification: async (id: string): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(`/notifications/view/${id}`);

    return request;
  },
  deleteNotification: async (id: string): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete(`/notifications/${id}`);

    return request;
  },
  deleteNotifications: async (): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete(`/notifications`);

    return request;
  },
});
