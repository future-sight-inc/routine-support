import { AxiosResponse } from "axios";

import { Activity } from "./types";
import { formatActivity } from "./utils";

import { DateString, Id } from "@routine-support/types";
import { apiClient } from "@routine-support/api-client";

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
  confirmActivity: async ({ id, date }: { id: Id; date: DateString }) => {
    const request: AxiosResponse = await apiClient.put(
      `/activity/${id}/${date}`
    );

    return request;
  },
};
