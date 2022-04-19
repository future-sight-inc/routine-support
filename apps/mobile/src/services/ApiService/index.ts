import { API_ENDPOINT } from "@env";
import { createClient } from "@routine-support/api-client";
import {
  createActivityAPI,
  createDayAPI,
  createStudentAPI,
} from "@routine-support/domains";

// todo Не прокидывается переменная без вывода в консоль
console.log(API_ENDPOINT);
const client = createClient(API_ENDPOINT);

export const dayAPI = createDayAPI(client);
export const studentAPI = createStudentAPI(client);
export const activityAPI = createActivityAPI(client);
