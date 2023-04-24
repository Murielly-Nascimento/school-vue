import axios from "axios";
import { SessionHelper } from "./helpers";

const env = import.meta.env;

export const baseURL = env?.VITE_API_URL ? env?.VITE_API_URL : "https://localhost:3000";
  
export const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  const item = SessionHelper.getDecodedItem("tk");
  if (item && item.access_token) {
    config.headers.Authorization = `Bearer ${item.access_token}`;
  }
  return config;
});

api.interceptors.response.use(
  async (response) => response,
  (error) => {
    if (error.response) {
      if (
        error.response.status === 500 &&
        location.pathname.indexOf("login") === -1 &&
        location.hostname !== "127.0.0.1"
      ) {
        //window.location.reload();
      }
    } else if (error && location.pathname.indexOf("login") === -1) {
      //window.location = '/login'
    }
    return Promise.reject(error);
  }
);
