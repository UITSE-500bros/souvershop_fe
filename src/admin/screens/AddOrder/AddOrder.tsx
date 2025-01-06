import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrdersList: React.FC = () => {
    const navigate = useNavigate();
    const [isAddingReceipt, setIsAddingReceipt] = useState(false);
    const [orderData, setOrderData] = useState({
        productName: "",
        orderValue: "",
        quantity: "",
        deliveryDate: "",
    });
    const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
    const [orders, setOrders] = useState([
        { id: 1, productName: "Mì tôm", orderValue: "250,000 VNĐ", quantity: "50 Gói", deliveryDate: "12/1/2024" },
        { id: 2, productName: "Bánh Oreo", orderValue: "150,000 VNĐ", quantity: "30 Gói", deliveryDate: "14/1/2024" },
        { id: 3, productName: "Coca Cola", orderValue: "500,000 VNĐ", quantity: "100 Lon", deliveryDate: "20/1/2024" },
    ]);

    const handleSelectOrder = (id: number) => {
        setSelectedOrders((prev) =>
            prev.includes(id) ? prev.filter((orderId) => orderId !== id) : [...prev, id]
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
        const selectedOrderDetails = orders.filter((order) => selectedOrders.includes(order.id));
        navigate("/admin/orders", { state: { importedOrders: selectedOrderDetails } });
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
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow container mx-auto p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h2>
                <div className="overflow-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-4 text-center text-lg">
                                    <label
                                        className="cursor-pointer"
                                    >
                                        Chọn
                                    </label>
                                </th>
                                <th className="border border-gray-300 p-4 text-left text-lg">Sản phẩm</th>
                                <th className="border border-gray-300 p-4 text-left text-lg">Giá trị đơn hàng</th>
                                <th className="border border-gray-300 p-4 text-left text-lg">Số lượng</th>
                                <th className="border border-gray-300 p-4 text-left text-lg">Ngày giao hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="border border-gray-300 py-6 text-lg flex justify-center items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedOrders.includes(order.id)}
                                            onChange={() => handleSelectOrder(order.id)}
                                        />
                                    </td>

                                    <td className="border border-gray-300 p-4 text-lg">{order.productName}</td>
                                    <td className="border border-gray-300 p-4 text-lg">{order.orderValue}</td>
                                    <td className="border border-gray-300 p-4 text-lg">{order.quantity}</td>
                                    <td className="border border-gray-300 p-4 text-lg">{order.deliveryDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-100">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSelectAll}
                >
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddReceipt}
                >
                    Tạo phiếu nhập
                </Button>
            </div>

            {isAddingReceipt && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
                    <div className="bg-white w-[400px] p-[20px] rounded-md shadow-lg">
                        <h2 className="text-[24px] font-bold mb-4">Tạo phiếu nhập</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center gap-3">
                                <label className="text-[14px] text-[#333] w-[150px]">Sản phẩm:</label>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    name="productName"
                                    value={orderData.productName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <label className="text-[14px] text-[#333] w-[150px]">Giá trị đơn hàng:</label>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    name="orderValue"
                                    value={orderData.orderValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <label className="text-[14px] text-[#333] w-[150px]">Số lượng:</label>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    name="quantity"
                                    value={orderData.quantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <label className="text-[14px] text-[#333] w-[150px]">Ngày giao hàng:</label>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    name="deliveryDate"
                                    value={orderData.deliveryDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex justify-between mt-4 gap-3">
                                <Button variant="outlined" onClick={handleCloseForm}>
                                    Hủy bỏ
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
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
