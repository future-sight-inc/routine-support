import { API_ENDPOINT } from "@env";
import { createClient } from "@routine-support/api-client";
import {
  createActivityAPI,
  createDayAPI,
  createStudentAPI,
} from "@routine-support/domains";

console.log(API_ENDPOINT);
// todo Использовать переменную окружения
const client = createClient("http://192.168.2.7:4000/api");

export const dayAPI = createDayAPI(client);
export const studentAPI = createStudentAPI(client);
export const activityAPI = createActivityAPI(client);
