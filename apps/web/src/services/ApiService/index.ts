import { createClient } from "@routine-support/api-client";
import {
  createCoachActivityAPI,
  createCoachAuthAPI,
  createCoachNotificationAPI,
  createCoachStudentAPI,
  createCoachWeekAPI,
} from "@routine-support/domains";

const client = createClient("/api/coach");

export const coachActivityAPI = createCoachActivityAPI(client);
export const coachStudentAPI = createCoachStudentAPI(client);
export const coachAuthAPI = createCoachAuthAPI(client);
export const coachWeekAPI = createCoachWeekAPI(client);
export const coachNotificationAPI = createCoachNotificationAPI(client);
