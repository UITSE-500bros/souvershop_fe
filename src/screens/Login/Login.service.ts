import axiosInstance from "@/services/AxiosInstance";

const API_URL = import.meta.env.VITE_API_URL;
export const loginWithGoogleApi = async () => {
  try {
    window.location.href = `${API_URL}/auth/login/federated/google`;
  } catch (error) {
    console.log(error);
  }
};
