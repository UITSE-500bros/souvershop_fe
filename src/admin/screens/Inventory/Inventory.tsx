import React, { useState } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import InventoryButton from "../../../admin/components/InventoryButton";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const [isAddingInventory, setIsAddingInventory] = useState(false);
  const navigate = useNavigate();

  const products = [
    {
      name: "Maggi",
      purchasePrice: "250 000 VNĐ",
      quantity: "50 Gói",
      thresholdValue: "15 Gói",
      expirationDate: "12/1/2024",
      availability: "Còn hàng",
    },
  ];

  const handleAddInventory = () => {
    setIsAddingInventory(true);
  };

  const handleCloseModal = () => {
    setIsAddingInventory(false);
  };

  const handleNavigateToProductInfo = () => {
    navigate("product-info"); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md relative">
        <div className="flex flex-col items-start p-4 border border-[#ddd] rounded-md">
          <div className="text-[24px] font-bold text-[#333] text-left">Tổng kho</div>

          <div className="flex gap-[75px] mt-2 justify-start">
            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md gap-y-2">
              <div className="text-[#1570EF] font-bold">Thể loại</div>
              <div className="text-[14px] font-bold">7</div>
              <div className="text-[#858D9D] text-[14px]">7 ngày qua</div>
            </div>

            <div className="flex flex-col items-start justify-start w-[200px] p-[10px] rounded-md">
              <div className="text-[#E19133] font-bold">Tổng sản phẩm</div>
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
              <div className="text-[#845EBC] font-bold">Bán chạy nhất</div>
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
              <div className="text-[#F36960] font-bold">Cổ phiếu thấp</div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[14px] font-bold">12</div>
                <div className="text-[14px] font-bold">2</div>
              </div>
              <div className="flex justify-between w-full mt-2">
                <div className="text-[#858D9D] text-[14px]">Đã đặt hàng</div>
                <div className="text-[#858D9D] text-[14px]">Không có trong kho</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold text-[#333]">Các sản phẩm</div>
          <InventoryButton onAddInventory={handleAddInventory} />
        </div>

        <div className="flex flex-col gap-5 overflow-auto border border-[#ddd] rounded-md">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Tên sản phẩm</div>
            <div className="flex-1 text-left">Giá mua</div>
            <div className="flex-1 text-left">Số lượng</div>
            <div className="flex-1 text-left">Giá trị ngưỡng</div>
            <div className="flex-1 text-left">Ngày hết hạn</div>
          </div>
          {products.map((product, index) => (
            <div
              className="flex p-[10px] border-b border-[#ddd]"
              key={index}
              onClick={handleNavigateToProductInfo}
              style={{ cursor: "pointer" }}
            >
              <div className="flex-1 text-left">{product.name}</div>
              <div className="flex-1 text-left">{product.purchasePrice}</div>
              <div className="flex-1 text-left">{product.quantity}</div>
              <div className="flex-1 text-left">{product.thresholdValue}</div>
              <div className="flex-1 text-left">{product.expirationDate}</div>
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
        {isAddingInventory && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white w-[400px] p-[20px] rounded-md shadow-lg">
              <h2 className="text-[24px] font-bold mb-4">Thêm Sản Phẩm</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333] w-[150px]">Tên sản phẩm:</label>
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
                  <label className="text-[14px] text-[#333] w-[100px]">Giá trị ngưỡng:</label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <label className="text-[14px] text-[#333]">Ngày hết hạn:</label>
                  <TextField sx={{ width: "250px" }} variant="outlined" size="small" />
                </div>
                <div className="flex justify-between mt-4 gap-3">
                  <Button variant="outlined" onClick={handleCloseModal}>
                    Hủy bỏ
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleCloseModal}>
                    Thêm sản phẩm
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
