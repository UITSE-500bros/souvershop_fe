import { Receipt } from "@/models/Receipt";
import axiosInstance from "@/services/AxiosInstance";

export const checkoutVNpayApi = async (receipt: Receipt) => {
  const response =await  axiosInstance.post("receipt/create_payment_url", {
    productList: receipt.productList,
    amount: receipt.amount,
  });
  return response.data;
};
