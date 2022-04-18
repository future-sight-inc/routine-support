import { Id } from "@routine-support/types";
import { AxiosInstance, AxiosResponse } from "axios";
import { Activity } from "./types";
import { createSchemaFromActivity } from "./utils";

export const createActivityAPI = (client: AxiosInstance) => ({
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.post(
      "/activity",
      createSchemaFromActivity(data)
    );

    return request;
  },
  updateActivity: async (activity: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(
      `/activity/${activity._id}`,
      createSchemaFromActivity(activity)
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
