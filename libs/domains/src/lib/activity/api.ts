import { apiClient, mobileApiClient } from "@routine-support/api-client";
import { Id } from "@routine-support/types";
import { AxiosResponse } from "axios";
import { Activity } from "./types";
import { formatActivity } from "./utils";

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
  confirmActivity: async ({ id, timestamp }: { id: Id; timestamp: number }) => {
    const request: AxiosResponse = await mobileApiClient.put(
      `/activity/confirm/${id}/${timestamp}`
    );

    return request;
  },
};
