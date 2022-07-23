import { createClient } from "@routine-support/api-client";
import {
  createCoachAuthAPI,
  createCoachDayAPI,
  createStudentActivityAPI,
  createStudentAuthAPI,
  createStudentDayAPI,
} from "@routine-support/domains";
import { getEnvVars } from "apps/mobile/environment";

const { apiEndpoint } = getEnvVars();

const coachClient = createClient(`${apiEndpoint}/coach`);

export const coachAuthAPI = createCoachAuthAPI(coachClient);
export const coachDayAPI = createCoachDayAPI(coachClient);

const studentClient = createClient(`${apiEndpoint}/student`);

export const studentDayAPI = createStudentDayAPI(studentClient);
export const studentAuthAPI = createStudentAuthAPI(studentClient);
export const studentActivityAPI = createStudentActivityAPI(studentClient);
