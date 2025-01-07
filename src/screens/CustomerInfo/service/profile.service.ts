import axiosInstance from "@/services/AxiosInstance";

export const getCustomerInfo = async () => {
  try {
    const response = await axiosInstance.get("profile");
    return response.data;
  } catch (err) {
    console.error("Error in getCustomerInfo service:", err);
    throw err;
  }
};

export const updateCustomerInfo = async (data: any) => {
  try {
    console.log(data);
    const response = await axiosInstance.patch("profile", data);
    return response.data;
  } catch (err) {
    console.error("Error in updateCustomerInfo service:", err);
    throw err;
  }
}