import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

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

export const createClient = (baseUrl: string): AxiosInstance => {
  const client = axios.create(createConfig(baseUrl));

  client.interceptors.response.use(onFulfilled, onRejected);

  return client;
};
