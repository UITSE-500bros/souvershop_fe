import { formatPrice } from '@/utils/FormatPrice';
import React from 'react';

export interface PaymentInfo{
  subtotal: number;
  shipping: number;
  total: number;
  discount: number;
  memberDiscount: number;
}

const OrderSummaryCard: React.FC<PaymentInfo> = ({
  subtotal,
  shipping,
  total,
  discount,
  memberDiscount
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>

      <div className="p-5 bg-[#F8F2E5] rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <span>Tổng đơn hàng</span>
          <span>{subtotal.toLocaleString()} đ</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Phí vận chuyển</span>
          <span>{shipping.toLocaleString()} đ</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Giảm giá </span>
          <span> -{formatPrice(discount)} </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Ưu đãi thành viên</span>
          <span> -{formatPrice(memberDiscount)} </span>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between font-bold">
          <span>Tổng cộng</span>
          <span>{total.toLocaleString()} đ</span>
        </div>


      </div>
    </div>
  );
};

export default OrderSummaryCard;
