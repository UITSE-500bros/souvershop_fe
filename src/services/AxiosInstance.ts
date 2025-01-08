import useAuthStore from "@/stores/AuthStore";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      const authStore = useAuthStore.getState();
      if (!isRefreshing) {
        isRefreshing = true;
        originalRequest._retry = true;

        try {
          const response = await axiosInstance.post("auth/refreshtoken", {
            refreshToken: authStore.refreshToken,
          });

          const { accessToken } = response.data;

          // Update tokens in the store and local storage
          authStore.accessToken = accessToken;
          localStorage.setItem("accessToken", accessToken);

          processQueue(null, accessToken);

          return axiosInstance(originalRequest); // Retry the original request with the new token
        } catch (refreshError) {
          processQueue(refreshError, null);
          authStore.logout(); // Logout if refresh fails
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // If another request is already refreshing, queue the failed request
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          },
          reject: (err: any) => reject(err),
        });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
