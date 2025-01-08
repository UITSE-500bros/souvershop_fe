import { Loading } from "@/components/Loading";
import axiosInstance from "@/services/AxiosInstance";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { URL } from "url";

const PaymentReturn = () => {
  const location = useLocation();
  const search = location.search;
  console.log(search);
  useEffect(() => {
    const fetchPaymentReturn = async () => {
      try {
        const res = await axiosInstance.post(`receipt/payment-return${search}`);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPaymentReturn();
  });

  return (
    <Loading />
  );
};

export default PaymentReturn;
