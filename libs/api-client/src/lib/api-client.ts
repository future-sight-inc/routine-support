import axios, { AxiosError } from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export const apiClient = axios.create({
  baseURL: process.env.NX_WEB_API_ENDPOINT,
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
  },
});

export const mobileApiClient = axios.create({
  baseURL: process.env.NX_MOBILE_API_ENDPOINT,
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
  },
});
