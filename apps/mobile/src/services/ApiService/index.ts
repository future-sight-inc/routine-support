import { API_ENDPOINT } from "@env";
import { createClient } from "@routine-support/api-client";
import {
  createActivityAPI,
  createDayAPI,
  createStudentAPI,
} from "@routine-support/domains";

const client = createClient(API_ENDPOINT || "");

export const dayAPI = createDayAPI(client);
export const studentAPI = createStudentAPI(client);
export const activityAPI = createActivityAPI(client);
