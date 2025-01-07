import axiosInstance from "@/services/AxiosInstance";

export const getProductInventory = async (page:number,pageSize:number) => {
  try {
    const response = await axiosInstance.get(`product/inventory?page=${page}&page_size=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}