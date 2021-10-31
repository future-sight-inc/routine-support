import axios from "axios";

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
