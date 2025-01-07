import axiosInstance from "@/services/AxiosInstance";

export const getFavourite = async () => {
    const response = await axiosInstance.get("customer/favourite");
    return response.data;
};
export const removeProductFromFavourite = async (productId: string) => {
    const response = await axiosInstance.delete(`customer/favourite/${productId}`);
    return response.data;
}