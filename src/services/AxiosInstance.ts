import useAuthStore from '@/stores/AuthStore';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = useAuthStore.getState().accessToken;
        if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
    );


export default axiosInstance;
