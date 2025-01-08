import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderItem } from "./model/OrderItem";
import axiosInstance from "@/services/AxiosInstance";

const OrdersList: React.FC = () => {
  const navigate = useNavigate();
  const [isAddingReceipt, setIsAddingReceipt] = useState(false);

  const [orderData, setOrderData] = useState<OrderItem[]>([]);
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const fetchOrders = async () => {
    try {
      const res = await axiosInstance.get("product/lookup");
      setOrderData(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orderData);
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Mì tôm",
      orderValue: "250,000 VNĐ",
      quantity: "50 Gói",
      deliveryDate: "12/1/2024",
    },
    {
      id: 2,
      productName: "Bánh Oreo",
      orderValue: "150,000 VNĐ",
      quantity: "30 Gói",
      deliveryDate: "14/1/2024",
    },
    {
      id: 3,
      productName: "Coca Cola",
      orderValue: "500,000 VNĐ",
      quantity: "100 Lon",
      deliveryDate: "20/1/2024",
    },
  ]);

  const handleSelectOrder = (id: number) => {
    setSelectedOrders((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  const handleImportOrders = () => {
    const selectedOrderDetails = orders.filter((order) =>
      selectedOrders.includes(order.id),
    );
    navigate("/admin/orders", {
      state: { importedOrders: selectedOrderDetails },
    });
  };

  const handleAddReceipt = () => {
    setIsAddingReceipt(true);
  };

  const handleCloseForm = () => {
    setIsAddingReceipt(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = () => {
    const newOrder = {
      id: orders.length + 1,
      productName: orderData.productName,
      orderValue: orderData.orderValue,
      quantity: orderData.quantity,
      deliveryDate: orderData.deliveryDate,
    };

    setOrders([...orders, newOrder]);
    setIsAddingReceipt(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <div className="container mx-auto flex-grow rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Danh sách đơn hàng</h2>
        <div className="overflow-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4 text-center text-lg">
                  <label className="cursor-pointer">Chọn</label>
                </th>
                <th className="border border-gray-300 p-4 text-left text-lg">
                  Sản phẩm
                </th>
                <th className="border border-gray-300 p-4 text-left text-lg">
                  Giá Nhập
                </th>
                <th className="border border-gray-300 p-4 text-left text-lg">
                  Số lượng
                </th>
                
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="flex items-center justify-center border border-gray-300 py-6 text-lg">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                    />
                  </td>

                  <td className="border border-gray-300 p-4 text-lg">
                    {order.productName}
                  </td>
                  <td className="border border-gray-300 p-4 text-lg">
                    {order.orderValue}
                  </td>
                  <td className="border border-gray-300 p-4 text-lg">
                    {order.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 p-4">
        <Button variant="contained" color="primary" onClick={handleSelectAll}>
          Chọn tất cả
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleImportOrders}
          disabled={selectedOrders.length === 0}
        >
          Nhập hàng
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddReceipt}>
          Tạo phiếu nhập
        </Button>
      </div>

      {isAddingReceipt && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="w-[400px] rounded-md bg-white p-[20px] shadow-lg">
            <h2 className="mb-4 text-[24px] font-bold">Tạo phiếu nhập</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <label className="w-[150px] text-[14px] text-[#333]">
                  Sản phẩm:
                </label>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="productName"
                  value={orderData.productName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <label className="w-[150px] text-[14px] text-[#333]">
                  Giá trị đơn hàng:
                </label>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="orderValue"
                  value={orderData.orderValue}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <label className="w-[150px] text-[14px] text-[#333]">
                  Số lượng:
                </label>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="quantity"
                  value={orderData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <label className="w-[150px] text-[14px] text-[#333]">
                  Ngày giao hàng:
                </label>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="deliveryDate"
                  value={orderData.deliveryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 flex justify-between gap-3">
                <Button variant="outlined" onClick={handleCloseForm}>
                  Hủy bỏ
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Lưu phiếu nhập
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
