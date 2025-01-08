import React, { useEffect, useState } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import InventoryButton from "../../../admin/components/InventoryButton";
import { useNavigate } from "react-router-dom";
import { getProductInventory } from "./service/Inventory.service";
import { Loading } from "@/components/Loading";
import { Product } from "@/models/Product";

export default function Inventory() {
  const [isAddingInventory, setIsAddingInventory] = useState(false);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);

  // const products = [
  //   {
  //     name: "Maggi",
  //     purchasePrice: "250 000 VNĐ",
  //     quantity: "50 Gói",
  //     thresholdValue: "15 Gói",
  //     expirationDate: "12/1/2024",
  //     availability: "Còn hàng",
  //   },
  // ];

  const handleAddInventory = () => {
    setIsAddingInventory(true);
  };

  const handleCloseModal = () => {
    setIsAddingInventory(false);
  };

  const handleNavigateToProductInfo = () => {
    navigate("/admin/product");
  };
  const fetchProducts = async () => {
    try {
      const res = await getProductInventory(page, 10);
      setProducts(res);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);
  console.log(products);

  const handleNextPage = () => {
    if (page < 10) setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };
  if (!products) return <Loading />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="relative flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md">
        <div className="flex flex-col items-start rounded-md border border-[#ddd] p-4">
          <div className="text-left text-[24px] font-bold text-[#333]">
            Tổng kho
          </div>

          <div className="mt-2 flex justify-start gap-[75px]">
            <div className="flex w-[200px] flex-col items-start justify-start gap-y-2 rounded-md p-[10px]">
              <div className="font-bold text-[#1570EF]">Thể loại</div>
              <div className="text-[14px] font-bold">7</div>
              <div className="text-[14px] text-[#858D9D]">7 ngày qua</div>
            </div>

            <div className="flex w-[200px] flex-col items-start justify-start rounded-md p-[10px]">
              <div className="font-bold text-[#E19133]">Tổng sản phẩm</div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] font-bold">868</div>
                <div className="text-[14px] font-bold">25,000 VNĐ</div>
              </div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] text-[#858D9D]">7 ngày qua</div>
                <div className="text-[14px] text-[#858D9D]">Doanh thu</div>
              </div>
            </div>

            <div className="flex w-[200px] flex-col items-start justify-start rounded-md p-[10px]">
              <div className="font-bold text-[#845EBC]">Bán chạy nhất</div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] font-bold">2</div>
                <div className="text-[14px] font-bold">25,000 VNĐ</div>
              </div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] text-[#858D9D]">7 ngày qua</div>
                <div className="text-[14px] text-[#858D9D]">Trị giá</div>
              </div>
            </div>

            <div className="flex w-[200px] flex-col items-start justify-start rounded-md p-[10px]">
              <div className="font-bold text-[#F36960]">Cổ phiếu thấp</div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] font-bold">12</div>
                <div className="text-[14px] font-bold">2</div>
              </div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] text-[#858D9D]">Đã đặt hàng</div>
                <div className="text-[14px] text-[#858D9D]">
                  Không có trong kho
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[24px] font-bold text-[#333]">Các sản phẩm</div>
          <InventoryButton onAddInventory={handleAddInventory} />
        </div>

        <div className="flex flex-col gap-5 overflow-auto rounded-md border border-[#ddd]">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Tên sản phẩm</div>
            <div className="flex-1 text-left">Giá mua</div>
            <div className="flex-1 text-left">Giá bán</div>
            <div className="flex-1 text-left">Số lượng</div>
          </div>
          {products.map((product) => (
            <div
              className="flex border-b border-[#ddd] p-[10px]"
              key={product.product_id}
              onClick={handleNavigateToProductInfo}
              style={{ cursor: "pointer" }}
            >
              <div className="line-clamp-3  flex-1 overflow-hidden text-ellipsis text-left">
                {product.product_name}
              </div>
              <div className="flex-1 text-left">
                {product.product_import_price}
              </div>
              <div className="flex-1 text-left">
                {product.product_selling_price}
              </div>
              <div className="flex-1 text-left">{product.product_quantity}</div>
            </div>
          ))}
        </div>
        <div className="mt-[auto] flex items-center justify-center gap-[20px] p-[10px]">
          <Button
            variant="outlined"
            sx={{ textTransform: "none", marginRight: "350px" }}
            onClick={handlePreviousPage}
          >
            Trước
          </Button>
          <div>Trang {page} trong 10</div>
          <Button
            onClick={handleNextPage}
            variant="outlined"
            sx={{ textTransform: "none", marginLeft: "350px" }}
          >
            Sau
          </Button>
        </div>
        {isAddingInventory && (
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="w-[400px] rounded-md bg-white p-[20px] shadow-lg">
              <h2 className="mb-4 text-[24px] font-bold">Thêm Sản Phẩm</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <label className="w-[150px] text-[14px] text-[#333]">
                    Tên sản phẩm:
                  </label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label className="w-[150px] text-[14px] text-[#333]">
                    Giá mua:
                  </label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label className="w-[150px] text-[14px] text-[#333]">
                    Số lượng:
                  </label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex items-center justify-between gap-10">
                  <label className="w-[100px] text-[14px] text-[#333]">
                    Giá trị ngưỡng:
                  </label>
                  <TextField fullWidth variant="outlined" size="small" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label className="text-[14px] text-[#333]">
                    Ngày hết hạn:
                  </label>
                  <TextField
                    sx={{ width: "250px" }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="mt-4 flex justify-between gap-3">
                  <Button variant="outlined" onClick={handleCloseModal}>
                    Hủy bỏ
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCloseModal}
                  >
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
