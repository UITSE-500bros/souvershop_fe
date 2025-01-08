import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import OrderButton from "@/admin/components/OrderButtons";
import { Order } from "./Orders";
import axiosInstance from "@/services/AxiosInstance";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { formatPrice } from "@/utils/FormatPrice";

const Orders: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const importedOrders = location.state?.importedOrders || [];
  const [orders, setOrders] = React.useState<Order[]>([]);

  const handleAddOrder = () => {
    navigate("add-order");
  };
  const fetchOrders = async () => {
    try {
      const res = await axiosInstance.get("grn");
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orders);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="relative flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md">
        <div className="flex flex-col items-start rounded-md border border-[#ddd] p-4">
          <div className="text-left text-[24px] font-bold text-[#333]">
            Tổng đơn hàng
          </div>

          <div className="mt-2 flex justify-start gap-[75px]">
            <div className="flex w-[200px] flex-col items-start justify-start gap-y-2 rounded-md p-[10px]">
              <div className="font-bold text-[#1570EF]">Tổng đơn hàng</div>
              <div className="text-[14px] font-bold">337</div>
              <div className="text-[14px] text-[#858D9D]">7 ngày qua</div>
            </div>

            <div className="flex w-[200px] flex-col items-start justify-start rounded-md p-[10px]">
              <div className="font-bold text-[#E19133]">Tổng số đã nhận</div>
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
              <div className="font-bold text-[#845EBC]">Tổng số trả lại</div>
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
              <div className="font-bold text-[#F36960]">Trên đường đi</div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] font-bold">12</div>
                <div className="text-[14px] font-bold">25000VND</div>
              </div>
              <div className="mt-2 flex w-full justify-between">
                <div className="text-[14px] text-[#858D9D]">Đã đặt hàng</div>
                <div className="text-[14px] text-[#858D9D]">Trị giá</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[24px] font-bold text-[#333]">Đơn hàng</div>
          <OrderButton onAddOrder={handleAddOrder} />
        </div>

        {/* <div className="flex flex-col gap-5 overflow-auto border border-[#ddd] rounded-md">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Các sản phẩm</div>
            <div className="flex-1 text-left">Giá trị đơn hàng</div>
            <div className="flex-1 text-left">Số lượng</div>
            <div className="flex-1 text-left">Mã đơn hàng</div>
            <div className="flex-1 text-left">Dự kiến giao hàng</div>
          </div>
          {orders.map((order, index) => (
            <div className="flex p-[10px] border-b border-[#ddd]" key={index}>
              <div className="flex-1 text-left">{order}</div>
              <div className="flex-1 text-left">{order.orderValue}</div>
              <div className="flex-1 text-left">{order.quantity}</div>
              <div className="flex-1 text-left">{order.orderCode}</div>
              <div className="flex-1 text-left">{order.deliveryDate}</div>
            </div>
          ))}
        </div> */}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Stt</TableCell>
                <TableCell>Mã đơn hàng</TableCell>
                <TableCell>Số lượng sản phẩm</TableCell>
                <TableCell>Giá trị đơn hàng</TableCell>
                <TableCell>Dự kiến giao hàng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{order.grn_id}</TableCell>
                  <TableCell>{order.product_list.length}</TableCell>
                  <TableCell>{formatPrice(order.total)}</TableCell>
                  <TableCell>
                    {new Date(order.created_at).toLocaleDateString("en-GB")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <div className="mt-[auto] flex items-center justify-center gap-[20px] p-[10px]">
          <Button
            variant="outlined"
            sx={{ textTransform: "none", marginRight: "350px" }}
          >
            Trước
          </Button>
          <div>Trang 1 trong 10</div>
          <Button
            variant="outlined"
            sx={{ textTransform: "none", marginLeft: "350px" }}
          >
            Sau
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Orders;
