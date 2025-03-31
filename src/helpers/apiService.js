import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    const referralToken = Cookies.get("referralToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (referralToken) {
      config.headers["X-Referral-Token"] = referralToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiCall = async (method, url, data = null) => {
  try {
    const response = await apiClient[method](url, data);
    return response.data;
  } catch (error) {
    console.log("API CALL ERROR", error);
    throw error?.response?.data || "An unexpected error occurred";
  }
};

export const get = (url, params = {}) => apiCall("get", url, params);
export const post = (url, data = {}) => apiCall("post", url, data);
export const put = (url, data = {}) => apiCall("put", url, data);
export const del = (url, params = {}) => apiCall("delete", url, params);

