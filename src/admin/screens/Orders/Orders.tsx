import React, { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { FaUser } from "react-icons/fa";
import OrderButton from "@/admin/components/OrderButtons";

export default function Order() {
  const [isAddingOrder, setIsAddingOrder] = useState(false);

  const handleAddOrder = () => {
    setIsAddingOrder(true);
  };

  const handleCloseModal = () => {
    setIsAddingOrder(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md relative">
        {/* Order Summary */}
        <div className="flex flex-col items-start p-4 border border-[#ddd] rounded-md">
          <div className="text-[24px] font-bold text-[#333] text-left">Tổng đơn hàng</div>

          <div className="flex gap-[75px] mt-2 justify-start">
            {/* Total Orders */}
            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md gap-y-2">
              <div className="text-[#1570EF] font-bold">Tổng đơn hàng</div>
              <div className="text-[14px] font-bold">337</div>
              <div className="text-[#858D9D] text-[14px]">7 ngày qua</div>
            </div>

            {/* Total Received */}
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

            {/* Total Returns */}
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

            {/* In Transit */}
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

        {/* Orders Section */}
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold text-[#333]">Đơn hàng</div>
          <OrderButton onAddOrder={handleAddOrder} />
        </div>

        {/* Order List */}
        <div className="flex flex-col gap-5 overflow-auto border border-[#ddd] rounded-md">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Các sản phẩm</div>
            <div className="flex-1 text-left">Giá trị đơn hàng</div>
            <div className="flex-1 text-left">Số lượng</div>
            <div className="flex-1 text-left">Mã đơn hàng</div>
            <div className="flex-1 text-left">Dự kiến giao hàng</div>
            <div className="flex-1 text-left">Trạng thái</div>
          </div>
          {[...Array(1)].map((_, index) => (
            <div className="flex p-[10px] border-b border-[#ddd]" key={index}>
              <div className="flex-1 text-left">Maggi</div>
              <div className="flex-1 text-left">250 000 VNĐ</div>
              <div className="flex-1 text-left">50 Gói</div>
              <div className="flex-1 text-left">7535</div>
              <div className="flex-1 text-left">12/1/2024</div>
              <div className="flex-1 text-left">Bị trì hoãn</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-[20px] p-[10px] mt-[auto]">
          <Button variant="outlined" sx={{ textTransform: "none", marginRight: "350px" }}>
            Trước
          </Button>
          <div>Trang 1 trong 10</div>
          <Button variant="outlined" sx={{ textTransform: "none", marginLeft: "350px" }}>
            Sau
          </Button>
        </div>

        {/* Add Order Modal */}
        {isAddingOrder && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white w-[400px] p-[20px] rounded-md shadow-lg">
              <h2 className="text-[24px] font-bold mb-4">Thêm Đơn Hàng</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-dashed border-2 p-4 mt-4">
                  <div className="w-[100px] h-[100px] rounded-full border-2 border-dashed border-[#ddd] flex justify-center items-center">
                    <FaUser size={60} color="#777777" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-[#858D9D]">Kéo hình ảnh vào đây</div>
                    <div className="text-[#858D9D]">Hoặc</div>
                    <div className="text-[#448DF2]">Duyệt hình ảnh</div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333] w-[150px]">Sản phẩm:</label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333] w-[150px]">Giá mua:</label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333] w-[150px]">Số lượng:</label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex justify-between items-center gap-10">
                  <label className="text-[14px] text-[#333] w-[100px]">Mã sản phẩm:</label>
                  <TextField fullWidth variant="outlined" size="small"/>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333]">Dự kiến ngày giao:</label>
                  <TextField sx={{ width: "250px" }} variant="outlined" size="small" />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333]">Tình trạng:</label>
                  <Select sx={{ width: "250px" }} defaultValue="Còn hàng" size="small">
                    <MenuItem value="Đã xác nhận">Đã xác nhận</MenuItem>
                    <MenuItem value="Bị trì hoãn">Bị trì hoãn</MenuItem>
                    <MenuItem value="Đã trả lại">Đã trả lại</MenuItem>
                    <MenuItem value="Đang giao">Đang giao</MenuItem>
                  </Select>
                </div>
                <div className="flex justify-between mt-4 gap-3">
                  <Button variant="outlined" onClick={handleCloseModal}>
                    Hủy bỏ
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleCloseModal}>
                    Thêm đơn hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}