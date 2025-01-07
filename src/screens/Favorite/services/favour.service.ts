import axiosInstance from "@/services/AxiosInstance";

export const getFavourite = async () => {
    const response = await axiosInstance.get("customer/favourite");
    return response.data;
};