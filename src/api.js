import axios from "axios";

export const baseURL = process.env.VUE_APP_API_URL ? 
  process.env.VUE_APP_API_URL :
  "https://localhost:3000";
  
export const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  const token = localStorage.getItem("tk");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
