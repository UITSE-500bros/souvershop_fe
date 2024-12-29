
import axiosInstance from "@/services/AxiosInstance";

export const getProductById = async (product_id: string) => {
  try {
    const res = await axiosInstance.get(`product/${product_id}`);
    if (!res) {
      throw new Error("No data returned from server");
    }

    return res.data;
  } catch (err) {
    console.error("Error in getProductDetail service:", err);
    throw err;
  }
};
