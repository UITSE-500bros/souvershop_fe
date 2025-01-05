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
export const getProductByCategoRyId = async (categoryId: string) => {
  try{
    const response = await axiosInstance.get(`category/${categoryId}`);
    return response.data;
  }
  catch(err){
    console.error("Error in getProductByCategoryId service:", err);
    throw err;
  }
}
