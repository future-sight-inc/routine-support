import { Activity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { AxiosInstance, AxiosResponse } from "axios";

export const createCoachActivityAPI = (client: AxiosInstance) => ({
  createActivity: async (data: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.post("/activity", data);

    return request;
  },
  updateActivity: async (activity: Activity): Promise<AxiosResponse> => {
    const request: AxiosResponse = await client.put(`/activity/${activity._id}`, activity);

    return request;
  },
  deleteActivity: async (id: string): Promise<AxiosResponse> => {
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
