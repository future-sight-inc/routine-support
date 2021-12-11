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
  baseURL: "http://localhost:5000/api",
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
  },
});

export const mobileApiClient = axios.create({
  baseURL: "http://192.168.0.119:5000/api",
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
  },
});
