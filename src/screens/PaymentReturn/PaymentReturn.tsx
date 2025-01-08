import { Loading } from "@/components/Loading";
import axiosInstance from "@/services/AxiosInstance";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "url";
import useCartStore from "../Cart/store/CartStore";
import { removeProductFromCart } from "../Cart/service/Cart.service";

const PaymentReturn = () => {
  const location = useLocation();
  const search = location.search;
  const nav = useNavigate()
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  useEffect(() => {
    const fetchPaymentReturn = async () => {
      try {
        const res = await axiosInstance.post(`receipt/payment-return${search}`);
        console.log(res);
        if (res.status === 200) {
          toast.success('Đặt hàng thành công');
          // cartItems.forEach((item) => {
          //   removeProductFromCart(item.product_id).then(() => {
          //     console.log('Remove product from cart success');
          //   }).catch((err) => {
          //     console.error(err);
          //   });
          // });
          clearCart();
          nav('/cart'); 
        }
      } catch (error) {
        
      }
    };
    fetchPaymentReturn();
  });

  return (
    <Loading />
  );
};

export default PaymentReturn;
