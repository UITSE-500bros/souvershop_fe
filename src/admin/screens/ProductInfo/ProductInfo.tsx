import React, { useState, ChangeEvent } from "react";
import { Tabs, Tab } from "@mui/material";
import ProductInfoButton from "@/admin/components/ProductInfoButton";  

export default function ProductInfo() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="flex h-auto w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold text-[#333]">Maggi</div>
          <ProductInfoButton />
        </div>

        <div className="flex border-b border-[#ddd]">
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Tổng quan" />
            <Tab label="Mua hàng" />
            <Tab label="Điều chỉnh " />
            <Tab label="Lịch sử " />
          </Tabs>
        </div>

        {selectedTab === 0 && (
          <div className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
              <div className="text-[18px] font-bold mb-4">Thông tin chi tiết</div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div>Tên sản phẩm:</div>
                  <div className="font-bold">Maggi</div>
                </div>
                <div className="flex justify-between">
                  <div>Mã sản phẩm:</div>
                  <div className="font-bold">MAG12345</div>
                </div>
                <div className="flex justify-between">
                  <div>Danh mục sản phẩm:</div>
                  <div className="font-bold">Instant food</div>
                </div>
                <div className="flex justify-between">
                  <div>Ngày hết hạn:</div>
                  <div className="font-bold">13/4/2023</div>
                </div>
                <div className="flex justify-between">
                  <div>Giá trị ngưỡng:</div>
                  <div className="font-bold">12</div>
                </div>
              </div>

              <div className="text-[18px] font-bold mb-4">Vị trí kho hàng</div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="font-bold">Tên cửa hàng</div>
                  <div className="font-bold">Hàng có sẵn</div>
                </div>
                <div className="flex justify-between">
                  <div>Sulur Branch</div>
                  <div>15</div>
                </div>
                <div className="flex justify-between">
                  <div>Singanallur Branch</div>
                  <div>19</div>
                </div>
              </div>
            </div>

            <div className="w-[250px]">
              <div className="text-[18px] font-bold mb-4">Hình ảnh sản phẩm</div>
              <div className="w-[200px] h-[200px] bg-white-200 rounded-md flex items-center justify-center border-2 border-gray-300 border-dashed">
              <img
                  src="https://cooponline.vn/wp-content/uploads/2022/09/nuoc-tuong-dau-nanh-maggi-chai-450ml-2023529.jpg" 
                  alt="Hình ảnh sản phẩm"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div>Mở hàng:</div>
                  <div className="font-bold">40</div>
                </div>
                <div className="flex justify-between">
                  <div>Hàng còn lại:</div>
                  <div className="font-bold">34</div>
                </div>
                <div className="flex justify-between">
                  <div>Trên đường đi:</div>
                  <div className="font-bold">15</div>
                </div>
                <div className="flex justify-between">
                  <div>Giá trị ngưỡng:</div>
                  <div className="font-bold">12</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
