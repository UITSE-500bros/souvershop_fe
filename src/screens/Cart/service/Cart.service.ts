import { Receipt } from "@/models/Receipt";
import axiosInstance from "@/services/AxiosInstance";

export const checkoutVNpayApi = async (receipt: Receipt) => {
  const response =await  axiosInstance.post("receipt/create_payment_url", {
    productList: receipt.productList,
    amount: receipt.amount,
  });
  return response.data;
};
export const getCart = async () => {
  const response = await axiosInstance.get("customer/cart");
  return response.data;
};
export const addProductToCart = async (productId: string, quantity: number) => {
  const response = await axiosInstance.post(`customer/cart`, {
    product_id: productId,
    quantity,
  });
  return response.data;
};
export const removeProductFromCart = async (productId: string) => {
  const response = await axiosInstance.delete(`customer/cart/${productId}`);
  return response.data;
}
export const updateProductQuantity = async (productId: string, quantity: number) => {
  const response = await axiosInstance.put(`customer/cart/${productId}`, {
    quantity
  });
  return response.data;
}