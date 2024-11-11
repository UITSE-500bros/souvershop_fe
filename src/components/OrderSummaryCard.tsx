import React from 'react';

interface OrderSummaryCardProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  subtotal,
  discount,
  shipping,
  total,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>

      <div className="p-5 bg-[#F8F2E5] rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <span>Tổng phụ</span>
          <span>{subtotal.toLocaleString()} đ</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Giảm giá (-20%)</span>
          <span className="text-red-500">{discount.toLocaleString()} đ</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Phí vận chuyển</span>
          <span>{shipping.toLocaleString()} đ</span>
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
