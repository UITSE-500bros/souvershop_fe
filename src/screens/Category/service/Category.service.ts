import http from "@/lib/Http";
import axiosInstance from "@/services/AxiosInstance";



export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("product");
    return response.data;
  } catch (err) {
    console.error("Error in getAllProducts service:", err);
    throw err;
  }
};
