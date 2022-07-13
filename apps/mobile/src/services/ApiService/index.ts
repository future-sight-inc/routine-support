import { createClient } from "@routine-support/api-client";
import {
  createActivityAPI,
  createCoachAPI,
  createDayAPI,
  createStudentAPI,
} from "@routine-support/domains";
import { getEnvVars } from "apps/mobile/environment";

const { apiEndpoint } = getEnvVars();

const client = createClient(apiEndpoint);

export const dayAPI = createDayAPI(client);
export const studentAPI = createStudentAPI(client);
export const activityAPI = createActivityAPI(client);
export const coachAPI = createCoachAPI(client);
