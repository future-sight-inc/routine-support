import { Id } from "@routine-support/types";
import { stringifyDate } from "@routine-support/utils";
import { AxiosInstance, AxiosResponse } from "axios";
import { Activity } from "./types";
import { createSchemaFromActivity } from "./utils";

export const createCoachActivityAPI = (client: AxiosInstance) => ({
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.post("/activity", createSchemaFromActivity(data));

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
});

export const createStudentActivityAPI = (client: AxiosInstance) => ({
  confirmActivity: async (activity: Activity) => {
    const request: AxiosResponse = await client.put(`/activity/confirm/${activity._id}/`, {
      date: stringifyDate(activity.date),
    });

    return request;
  },
});
