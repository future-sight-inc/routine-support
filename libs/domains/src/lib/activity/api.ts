import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { Activity } from "./types";
import { formatActivity } from "./utils";

export const createActivityAPI = (client: AxiosInstance) => ({
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.post(
      "/activity",
      formatActivity(data)
    );

    return request;
  },
  updateActivity: async ({
    _id,
    ...data
  }: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(
      `/activity/${_id}`,
      formatActivity(data)
    );

    return request;
  },
  deleteActivity: async (id: Id): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.delete(`/activity/${id}`);

    return request;
  },
  confirmActivity: async ({ id, timestamp }: { id: Id; timestamp: number }) => {
    const request: AxiosResponse = await client.put(
      `/activity/confirm/${id}/${timestamp}`
    );

    return request;
  },
});
