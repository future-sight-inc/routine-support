import { createClient } from "@routine-support/api-client";
import {
  createActivityAPI,
  createStudentAPI,
  createUserAPI,
  createWeekAPI,
} from "@routine-support/domains";

const client = createClient(process.env.NX_API_ENDPOINT || "");

export const activityAPI = createActivityAPI(client);
export const studentAPI = createStudentAPI(client);
export const userAPI = createUserAPI(client);
export const weekAPI = createWeekAPI(client);
