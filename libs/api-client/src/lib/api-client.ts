import axios, { AxiosError, AxiosResponse } from "axios";

const createConfig = (baseURL: string) => {
  return {
    baseURL,
    timeout: 30 * 1000,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
  };
};

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

export const apiClient = axios.create(
  createConfig(process.env.NX_WEB_API_ENDPOINT || "")
);
apiClient.interceptors.response.use(onFulfilled, onRejected);

export const mobileApiClient = axios.create(
  createConfig("http://192.168.2.7:3000/api")
);
mobileApiClient.interceptors.response.use(onFulfilled, onRejected);
