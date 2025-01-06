import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import OrderButton from "@/admin/components/OrderButtons";

interface Order {
  productName: string;
  orderValue: string;
  quantity: string;
  orderCode: string;
  deliveryDate: string;
}

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const importedOrders = location.state?.importedOrders || []; 

  const handleAddOrder = () => {
    navigate("add-order"); 
  };

  
  const orders: Order[] = [
    ...importedOrders, 
    {
      productName: "Maggi",
      orderValue: "250 000 VNĐ",
      quantity: "50 Gói",
      orderCode: "7535",
      deliveryDate: "12/1/2024",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md relative">
        <div className="flex flex-col items-start p-4 border border-[#ddd] rounded-md">
          <div className="text-[24px] font-bold text-[#333] text-left">Tổng đơn hàng</div>

          <div className="flex gap-[75px] mt-2 justify-start">
            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md gap-y-2">
              <div className="text-[#1570EF] font-bold">Tổng đơn hàng</div>
              <div className="text-[14px] font-bold">337</div>
              <div className="text-[#858D9D] text-[14px]">7 ngày qua</div>
            </div>

            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md">
              <div className="text-[#E19133] font-bold">Tổng số đã nhận</div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[14px] font-bold">868</div>
                <div className="text-[14px] font-bold">25,000 VNĐ</div>
              </div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[#858D9D] text-[14px]">7 ngày qua</div>
                <div className="text-[#858D9D] text-[14px]">Doanh thu</div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md">
              <div className="text-[#845EBC] font-bold">Tổng số trả lại</div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[14px] font-bold">2</div>
                <div className="text-[14px] font-bold">25,000 VNĐ</div>
              </div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[#858D9D] text-[14px]">7 ngày qua</div>
                <div className="text-[#858D9D] text-[14px]">Trị giá</div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md">
              <div className="text-[#F36960] font-bold">Trên đường đi</div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[14px] font-bold">12</div>
                <div className="text-[14px] font-bold">25000VND</div>
              </div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[#858D9D] text-[14px]">Đã đặt hàng</div>
                <div className="text-[#858D9D] text-[14px]">Trị giá</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold text-[#333]">Đơn hàng</div>
          <OrderButton onAddOrder={handleAddOrder} />
        </div>

        <div className="flex flex-col gap-5 overflow-auto border border-[#ddd] rounded-md">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Các sản phẩm</div>
            <div className="flex-1 text-left">Giá trị đơn hàng</div>
            <div className="flex-1 text-left">Số lượng</div>
            <div className="flex-1 text-left">Mã đơn hàng</div>
            <div className="flex-1 text-left">Dự kiến giao hàng</div>
          </div>
          {orders.map((order, index) => (
            <div className="flex p-[10px] border-b border-[#ddd]" key={index}>
              <div className="flex-1 text-left">{order.productName}</div>
              <div className="flex-1 text-left">{order.orderValue}</div>
              <div className="flex-1 text-left">{order.quantity}</div>
              <div className="flex-1 text-left">{order.orderCode}</div>
              <div className="flex-1 text-left">{order.deliveryDate}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-[20px] p-[10px] mt-[auto]">
          <Button variant="outlined" sx={{ textTransform: "none", marginRight: "350px" }}>
            Trước
          </Button>
          <div>Trang 1 trong 10</div>
          <Button variant="outlined" sx={{ textTransform: "none", marginLeft: "350px" }}>
            Sau
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
